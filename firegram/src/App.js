import React, { useState } from "react"
import Header from "./comps.js/Header"
import ImageGrid from "./comps.js/ImageGrid"
import UploadForm from "./comps.js/UploadForm"
import Modal from "./comps.js/Modal"

function App() {
  // const [file, setFile] = useState(null)
  const [image, setImage] = useState(null)
  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid setImage={setImage} />
      {image && <Modal image={image} setImage={setImage}/>}
    </div>
  );
}

export default App;
