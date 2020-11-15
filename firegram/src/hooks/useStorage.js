import { useEffect, useState } from "react"
import {projectStorage} from "../firebase/config"

const useStorage = (file) => {
    const [url, setUrl] = useState(null)
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const storageRef = projectStorage.ref(file.name)
        storageRef.put(file).on("state_changed", (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                // console.log(percentage)
            setProgress(percentage)
            }, 
            (err) => {
                setError(err)
            },
            async() => {
                let url = await storageRef.getDownloadURL()
                setUrl(url)
            })
    }, [file])
    

    return {url, progress, error}
}

export default useStorage