import React from "react"
import useFirestore from "../hooks/useFirestore"
const ImageGrid = () => {
    const {docs} = useFirestore("images")
    return (
        <div className="image-grid">
            {docs && docs.map((ele) => <div key={ele.id}><img src={ele.url} alt="gridPic" /></div> )}
        </div>
    )
}

export default ImageGrid