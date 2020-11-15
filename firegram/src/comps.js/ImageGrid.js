import React from "react"
import UseFirestore from "../hooks/UseFirestore"

const ImageGrid = ({setImage}) => {
    const {docs} = UseFirestore("images")
    return (<div className="image-grid">
        {docs.map(ele =><div className="img-wrap"> <img key={ele.id} src={ele.url} alt="grid" onClick={() => setImage(ele.url)} /></div>)}
    </div>)
}

export default ImageGrid