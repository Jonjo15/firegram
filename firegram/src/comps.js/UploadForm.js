import React, { useState } from "react"

const UploadForm = () => {
    const [file, setFile] = useState(null)
    const changeHandler = (e) => {
        // e.preventDefault()
        let doc = e.target.files[0];
        if (doc && (doc.type ==="image/png" || doc.type === "image/jpeg")) {
            setFile(doc)
        }
        else {
            setFile(null)
        }
    }
    return (<form>
        <input type="file" onChange={changeHandler}/>
        {file && <p>{file.name}</p>}
    </form>)
}

export default UploadForm