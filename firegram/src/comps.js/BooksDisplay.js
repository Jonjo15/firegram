import React from "react"
import useFirestore from "../hooks/useFirestore"

const BooksDisplay = () => {
    const {docs} = useFirestore("books");
    return (
        <div>
            {docs && <p>Hello</p>}
        </div>
    )
}

export default BooksDisplay