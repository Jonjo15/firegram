import React, {useState} from "react"

const UploadForm = () => {
    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("")
    const [pages, setPages] = useState("")
    const [readStatus, setReadStatus] = useState(null)
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("hey")
    }
    return (
        <form onSubmit={submitHandler}>
            <label>
                <input value={author} type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)}/>
                <input value={title} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                <input value={pages} type="number" placeholder="Number of Pages"
                onChange={(e) => setPages(e.target.value)}
                />
                
            </label>
            <label>
                <span>Read</span>
                <input name="readStatus" type="radio" value={true} onChange={(e) => setReadStatus(e.target.value)}/>
                <span>Not Read</span>
                <input name="readStatus" type="radio" value={false} onChange={(e) => setReadStatus(e.target.value)}/>
            </label>
            <button type="submit">Submit</button>
            <div className="test-output">
                <p>{author}</p>
                <p>{title}</p>
                <p>{pages}</p>
                <p>{readStatus}</p>
            </div>
        </form>
    )
}
export default UploadForm