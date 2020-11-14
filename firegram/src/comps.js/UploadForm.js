import React, { useState } from "react"
import ProgressBar from "./ProgressBar";
import UseStorage from "../hooks/UseStorage"


const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const {progress} = UseStorage(file)
    const changeHandler = (e) => {
        // e.preventDefault()
        let doc = e.target.files[0];
        if (doc && (doc.type ==="image/png" || doc.type === "image/jpeg")) {
            setFile(doc)
            setError(null)
        }
        else {
            setFile(null)
            setError("Upload the correct file type")
        }
    }
    return (
        <div>
            <form>
        <input type="file" onChange={changeHandler}/>
        {file && <p>{file.name}</p>}
        {error && <p>{error}</p>}
        </form>
        <ProgressBar progress={progress}/>
    </div>
    )
}

export default UploadForm