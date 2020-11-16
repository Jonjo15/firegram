import React from "react"
import Header from "./comps.js/Header"
import UploadForm from "./comps.js/UploadForm"

function App() {
  // const [showForm, setShowForm] = useState(true)
  // const [file, setFile] = useState(null)
  // const [imageUrl, setImageUrl] = useState(null)
  return (
    <div className="App">
      <Header />
      <UploadForm />
      {/* {showForm && <UploadForm />} */}
    </div>
  );
}

export default App;
