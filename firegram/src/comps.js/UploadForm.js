import React, { useState } from "react"
import ProgressBar from "./ProgressBar"

const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const fileTypes = ["image/png", "image/jpeg"]
    const changeHandler = (e) => {
        let file = e.target.files[0];
        if (file && fileTypes.includes(file.type)) {
            setFile(file)
            setError(null)
        }
        else {
            setFile(null)
            setError("Choose the right file type (image/png or image/jpeg)")
        }
    }
    return (
        <div>
            <form>
                <label>
                    <input type="file" onChange={changeHandler}/>
                    <span>+</span>
                </label> 
            </form>
            <div className="output">
                {file && <p>{file.name}</p>}
                {error && <p>{error}</p>}
            </div>
            {file && <ProgressBar file={file} setFile={setFile}/>}
        </div>
        
    )
}

export default UploadForm