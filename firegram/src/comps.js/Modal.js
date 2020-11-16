import React from "react"

const Modal = ({imageUrl, setImageUrl}) => {
    const handleClick = (e) => {
        if (e.target.classList.contains("backdrop")) {
            setImageUrl(null)
        }
    }
    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={imageUrl} alt="modal"/>
        </div>
    )
}

export default Modal