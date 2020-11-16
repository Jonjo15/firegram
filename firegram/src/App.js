import React, {useState} from "react"
import BooksDisplay from "./comps.js/BooksDisplay"
import Header from "./comps.js/Header"
import UploadForm from "./comps.js/UploadForm"

function App() {
  const [showForm, setShowForm] = useState(false)
  const [showButton, setShowButton] = useState(true)
  // const [file, setFile] = useState(null)
  // const [imageUrl, setImageUrl] = useState(null)
  const handleClick = () => {
    setShowForm(true)
    setShowButton(false)
  }
  return (
    <div className="App">
      <Header setShowForm={setShowForm}/>
      {showButton && <button className="add-button" onClick={handleClick}>Add a new book</button>}
      {showForm && <UploadForm setShowButton={setShowButton} setShowForm={setShowForm}/>}
      <BooksDisplay />
    </div>
  );
}

export default App;
