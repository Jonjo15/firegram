import React from "react"
import useFirestore from "../hooks/useFirestore"
import BookCard from "./BookCard";

const BooksDisplay = () => {
    const {docs} = useFirestore("books");
    return (
        <div className="book-grid">
            {docs && docs.map((ele) => <BookCard key={ele.id} data={ele}/>)}
        </div>
    )
}

export default BooksDisplay