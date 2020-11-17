import React from "react"
import {projectFirestore } from "../firebase/config"
// import BooksDisplay from "./BooksDisplay"

const BookCard = ({data}) => {
    const handleClickRead = (e) => {
        let document = {...data};
        if (data.readStatus === "read") {
            document.readStatus = "not read"
        }
        else {
            document.readStatus = "read"
        }
        projectFirestore.collection("books").doc(data.id).set(document)
        .then(function() {
            console.log("Document successfully written!")
        })
        .catch(function(err) {
            console.error("Error writinge document: ", err)
        });
    }
    const handleRemove = (e) => {
        projectFirestore.collection("books").doc(data.id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
    return (
        <div className="book-card">
            <h2>{data.title} by {data.author}</h2>
            <h3>{data.pages} pages</h3>
            <button onClick={handleClickRead}>{data.readStatus}</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default BookCard