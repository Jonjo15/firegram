import React, { useState } from "react"
import Header from "./comps.js/Header"
import ImageGrid from "./comps.js/ImageGrid"
import Modal from "./comps.js/Modal"
import UploadForm from "./comps.js/UploadForm"

function App() {
  // const [file, setFile] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid setImageUrl={setImageUrl} />
      {imageUrl && <Modal imageUrl={imageUrl} setImageUrl={setImageUrl} />}
    </div>
  );
}

export default App;
