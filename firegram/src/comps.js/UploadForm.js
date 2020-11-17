import React, {useState} from "react"
import {projectFirestore, timestamp} from "../firebase/config"
import {motion} from "framer-motion"
const UploadForm = ({ setShowForm, setShowButton }) => {
    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("")
    const [pages, setPages] = useState("")
    const [readStatus, setReadStatus] = useState(null)
    const [error, setError] = useState(null)
    const booksRef = projectFirestore.collection("books");
    const submitHandler = async (e) => {
        e.preventDefault()
        if (!author || !title || !pages || !readStatus) {
            setError("Fill the form completely")
            return;
        }
        let createdAt = timestamp();
        await booksRef.add({author, title, pages, readStatus, createdAt})
        setShowButton(true)
        setShowForm(false)
        setError(null)
        // console.log("hey")
    }
    return (
        <motion.form initial={{y: "-100vh"}} animate={{y: 0}} onSubmit={submitHandler}>
            <label>
                <input required value={author} type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)}/>
                <input required value={title} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                <input required value={pages} type="number" placeholder="Number of Pages"
                onChange={(e) => setPages(e.target.value)}
                />
                
            </label>
            <label>
                <span>Read</span>
                <input name="readStatus" type="radio" value="read" onChange={(e) => setReadStatus(e.target.value)}/>
                <span>Not Read</span>
                <input name="readStatus" type="radio" value="not read" onChange={(e) => setReadStatus(e.target.value)}/>
            </label>
            <button type="submit">Submit</button>
            {error &&<div className="error">{error}</div>}
        </motion.form>
    )
}
export default UploadForm