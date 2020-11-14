import React, { useEffect, useState } from "react"
import {projectStorage} from "../firebase/config"

const UseStorage = (file) => {
    const [progress, setProgress] = useState(null)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name)

        storageRef.put(file).on("state_changed", (snap) => {
            
        }, 
        (err) => {
            setError(err)
        }, 
        () => {

        })
    }, [file])
}