import { useState, useEffect } from "react";
import axios from "axios";
import Content from "../../components/Content/Content";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const API_URL = "http://localhost:8080";

function HomePage() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);  

  useEffect(() => {
    const fetchData = async () => {
        try {
            const tagsResponse = await axios.get(`${API_URL}/tags`);
            const photosResponse = await axios.get(`${API_URL}/photos`);
    
            setTags(tagsResponse.data);
            setPhotos(photosResponse.data);
            setFilteredPhotos(photosResponse.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchData();
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
          photos={filteredPhotos.map((photo) => ({
            ...photo, 
            photo: `${API_URL}/images/${photo.photo}`, 
          }))}
        />
      </main>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
