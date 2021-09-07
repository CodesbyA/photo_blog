import { useState } from "react";
import Heading from "./components/Heading";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Upload from "./components/Upload";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <Heading />
      <Upload />
      <ImageGrid setSelectedImage = {setSelectedImage} />
      {selectedImage && <Modal selectedImage = {selectedImage} setSelectedImage={setSelectedImage}/> }
    </div>
  );
}

export default App;
