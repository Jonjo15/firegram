import React from "react"
import Header from "./comps.js/Header"
import ImageGrid from "./comps.js/ImageGrid"
import UploadForm from "./comps.js/UploadForm"

function App() {
  // const [file, setFile] = useState(null)
  // const [image, setImage] = useState(null)
  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
