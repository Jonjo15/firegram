import React from "react"
import {motion} from "framer-motion"
import UseFirestore from "../hooks/UseFirestore"

const ImageGrid = ({setImage}) => {
    const {docs} = UseFirestore("images")
    return (<div className="image-grid">
        {docs && docs.map(ele =>(
        <motion.div key={ele.id} layout whileHover={{opacity: 1}} className="img-wrap">
             <motion.img key={ele.id} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}} src={ele.url} alt="grid" onClick={() => setImage(ele.url)} />
        </motion.div>))}
    </div>)
}

export default ImageGrid