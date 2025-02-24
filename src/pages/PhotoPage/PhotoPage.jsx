import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./PhotoPage.scss";
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

const API_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
const API_KEY = "f8599705-80b5-4d6f-8247-182da6f4e3ac";

function PhotoPage() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState({ name: "", comment: "" });

  useEffect(() => {
    const fetchPhotoAndComments = async () => {
      try {
        const photoResponse = await axios.get(`${API_URL}/photos/${id}?api_key=${API_KEY}`);
        setPhoto(photoResponse.data);

        const commentResponse = await axios.get(`${API_URL}/photos/${id}/comments?api_key=${API_KEY}`);
        
        
        const sortedComments = commentResponse.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
        setComments(sortedComments);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching photo:", error);
        setLoading(false);
      }
    };

    fetchPhotoAndComments();
  }, [id]);

  const handleCommentChange = (event) => {
    const { name, value } = event.target;
    setNewComment({ name: name === "name" ? value : newComment.name, comment: name === "comment" ? value : newComment.comment });
  };



  if (loading) {
    return <p>Loading photo...</p>;
  }

  if (!photo) {
    return <p>Photo not found!</p>;
  }

  return (
    <main className='main'>
      <Nav />
     
      <div className="footer__photo">
        <Footer />
        </div>
    </main>
  );
}

export default PhotoPage;
