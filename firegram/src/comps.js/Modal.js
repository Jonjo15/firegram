import React from "react"

const Modal = ({image, setImage}) => {
    const handleClick = (e) => {
        if(e.target.classList.contains("modal")) {
            setImage(null)
        }
    }
    return (<div className="modal" onClick={handleClick} >
        <img src={image} alt="modal"/>
    </div>)
}

export default Modal