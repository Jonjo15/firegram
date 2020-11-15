import React from "react"
import UseFirestore from "../hooks/UseFirestore"

const ImageGrid = ({setImage}) => {
    const {docs} = UseFirestore("images")
    
    return (<div className="image-grid">
        {docs.map(ele => <img key={ele.id} src={ele.url} alt="grid" onClick={() => setImage(ele.url)} />)}
    </div>)
}

export default ImageGrid