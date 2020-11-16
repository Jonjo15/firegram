import React from "react"
import useFirestore from "../hooks/useFirestore"
const ImageGrid = ({setImageUrl}) => {
    const { docs } = useFirestore("images")
    
    return (
        <div className="image-grid">
            {docs.map((ele) => (<div className="img-wrap" key={ele.id}><img onClick={() => setImageUrl(ele.url)} src={ele.url} alt="gridPic" /></div>) )}
        </div>
    )
}

export default ImageGrid