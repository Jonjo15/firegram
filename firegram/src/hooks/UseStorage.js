import { useEffect, useState } from "react"
import {projectStorage, projectFirestore, timestamp} from "../firebase/config"

const UseStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        if(file) {
        const storageRef = projectStorage.ref(file.name)
        const firestoreRef = projectFirestore.collection("images")
        storageRef.put(file).on("state_changed", (snap) => {    
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)
            }, 
        (err) => {
            setError(err)
        }, 
        async() => {
           let url = await storageRef.getDownloadURL()
           
           let createdAt = timestamp()
           await firestoreRef.add({url, createdAt})
           setUrl(url)
        //    setProgress(0)
        })
        }
        
    }, [file])
    return {progress, error, url}
}

export default UseStorage