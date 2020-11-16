import React, {useState} from "react"
import BooksDisplay from "./comps.js/BooksDisplay"
import Header from "./comps.js/Header"
import UploadForm from "./comps.js/UploadForm"

function App() {
  const [showForm, setShowForm] = useState(true)
  // const [file, setFile] = useState(null)
  // const [imageUrl, setImageUrl] = useState(null)
  return (
    <div className="App">
      <Header setShowForm={setShowForm}/>
      {showForm && <UploadForm setShowForm={setShowForm}/>}
      <BooksDisplay />
    </div>
  );
}

export default App;
