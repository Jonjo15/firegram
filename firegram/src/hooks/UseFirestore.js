import {useState, useEffect} from "react"
import {projectFirestore} from "../firebase/config"

const UseFirestore = (collection) => {
    const [docs, setDocs] = useState([])
    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
        .orderBy("createdAt", "desc")
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(function(doc) {
                let id = doc.id
                let element = {id, ...doc.data() }
                // console.log(element)
                documents.push(element)
            })
            setDocs(documents)
        })

        return () => unsub()
    }, [collection])
    return {docs}
}


export default UseFirestore