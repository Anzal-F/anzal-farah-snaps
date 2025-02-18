import { useState, useEffect } from "react";
import "./App.scss";
import tagsData from "./data/tags.json";
import photosData from "./data/photos.json";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);  

  useEffect(() => {
    setTags(tagsData);
    setPhotos(photosData);
    setFilteredPhotos(photosData);
  }, []);

  const handleFilterSelect = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
      setFilteredPhotos(photos);
    } else {
      setSelectedTag(tag);
      setFilteredPhotos(photos.filter((photo) => photo.tags.includes(tag)));
    }
  };

  const toggleNavbar = () => setIsOpen(!isOpen);  

  return (
    <>
       <main className="main">
      <Navbar
        tags={tags}
        selectedTag={selectedTag}
        handleFilterSelect={handleFilterSelect}
        isOpen={isOpen}   
        toggleNavbar={toggleNavbar} 
      />

      <Content
        tags={tags}
        selectedTag={selectedTag}
        onFilterSelect={handleFilterSelect}
        isOpen={isOpen}  
        photos={filteredPhotos}
      />
    </main>
    </>
  );
}

export default App;