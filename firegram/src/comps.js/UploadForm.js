import React, { useState } from "react"

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
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className="output">
                {file && <p>{file.name}</p>}
                {error && <p>{error}</p>}
            </div>
        </form>
    )
}

export default UploadForm