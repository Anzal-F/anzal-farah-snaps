
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
const API_KEY = "f8599705-80b5-4d6f-8247-182da6f4e3ac";

function HomePage() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);  

 useEffect(() => {
    
    const fetchData = async () => {
        try {
            const tagsResponse = await axios.get(`${API_URL}/tags?api_key=${API_KEY}`);
            const photosResponse = await axios.get(`${API_URL}/photos?api_key=${API_KEY}`);
    
            setTags(tagsResponse.data);
            setPhotos(photosResponse.data);
            setFilteredPhotos(photosResponse.data)
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
    
    </>
  );
}

export default HomePage;