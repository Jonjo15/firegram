import React from "react"
import useFirestore from "../hooks/useFirestore"
import {motion} from "framer-motion"
const ImageGrid = ({setImageUrl}) => {
    const { docs } = useFirestore("images")
    
    return (
        <div className="image-grid">
            {docs.map((ele) => (<motion.div layout whileHover={{opacity: 1}} className="img-wrap" key={ele.id}><motion.img initial={{opacity: 0}} animate={{opacity: 1}} tranisition={{delay: 1}} onClick={() => setImageUrl(ele.url)} src={ele.url} alt="gridPic" /></motion.div>) )}
        </div>
    )
}

export default ImageGrid