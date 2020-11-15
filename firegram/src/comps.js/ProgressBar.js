import React, {useEffect} from "react"
import UseStorage from "../hooks/UseStorage"
import {motion} from "framer-motion"
const ProgressBar = ({file, setFile}) => {
    const { progress, url } = UseStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

   return (<motion.div initial={{width: 0}} animate={{width: progress + "%"}} className="progress-bar"></motion.div>)
}

export default ProgressBar