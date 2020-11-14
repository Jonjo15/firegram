import { useEffect, useState } from "react"
import {projectStorage} from "../firebase/config"

const UseStorage = (file) => {
    const [progress, setProgress] = useState(null)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        if(file) {
            const storageRef = projectStorage.ref(file.name)

        storageRef.put(file).on("state_changed", (snap) => {    
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)
            }, 
        (err) => {
            setError(err)
        }, 
        async() => {
           let url = await storageRef.getDownloadURL()
           setUrl(url)
        })
        }
        
    }, [file])
    return {progress, error, url}
}

export default UseStorage