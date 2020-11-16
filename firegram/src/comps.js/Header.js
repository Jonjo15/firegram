import React from "react"

const Header = ({setShowForm}) => {
    // const handleClick = (e) => {
    //     setShowForm(true)
    //     // e.target.style.display ="none"
    // }
    return (
        <div className="header">
            <h1>Library</h1>
            {/* <button onClick={handleClick}>Add a new book</button> */}
        </div>
    )
}

export default Header