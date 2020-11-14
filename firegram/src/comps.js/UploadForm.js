import React, { useState } from "react"
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
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
        <ProgressBar />
    </div>
    )
}

export default UploadForm