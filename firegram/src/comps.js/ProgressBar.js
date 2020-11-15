import React, { useEffect } from "react"
import useStorage from "../hooks/useStorage"
const ProgressBar = ({file, setFile}) => {
    const {url, progress} = useStorage(file)
    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url, setFile])
    return (
        <div style={{width: progress + "%"}} className="progress-bar">progress</div>
    )
}
// style={{width: progress + "%"}}
export default ProgressBar