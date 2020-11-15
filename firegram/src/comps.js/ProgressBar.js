import React from "react"

const ProgressBar = ({progress}) => {
    return (<div style={{width: progress + "%"} } className="progress-bar"></div>)
}

export default ProgressBar