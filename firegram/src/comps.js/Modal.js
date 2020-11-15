import React from "react"

const Modal = ({image, setImage}) => {
    const handleClick = (e) => {
        if(e.target.classList.contains("backdrop")) {
            setImage(null)
        }
    }
    return (<div className="backdrop" onClick={handleClick} >
        <img src={image} alt="modal"/>
    </div>)
}

export default Modal