import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./PhotoPage.scss";
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import likesIcon from "../../assets/Icons/Like_Outline.svg";
import Comments from '../../components/Comments/Comments';

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

  const handleSubmitComment = async (event) => {
    event.preventDefault();
  
    if (!newComment.name || !newComment.comment) return;

    try {
        const response = await axios.post(
            `${API_URL}/photos/${id}/comments?api_key=${API_KEY}`,
            { name: newComment.name, comment: newComment.comment }
        );
        setComments([response.data, ...comments]);
        setNewComment({ name: "", comment: "" }); 
    } catch (error) {
        console.error("Error submitting comment:", error);
    }
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
      <div className="photo-cardbox">
        <div className="photo-cards">
          <img src={photo.photo} alt={photo.photoDescription} className="photo-img-large" />

          <div className="tags-photos">
            {photo.tags && photo.tags.map((tag, index) => (
              <span key={index} className="tags--photo">{tag}</span>
            ))}
          </div>

          <div className="name__date">
            <div className="name__likes">
              <div className="likes">
                <img src={likesIcon} alt="like" /> {photo.likes} likes
              </div>
              <h3 className='name'>Photo by {photo.photographer}</h3>
            </div>
            <div className="timestamp">
              {photo.timestamp ? new Date(photo.timestamp).toLocaleDateString() : "No date data"}
            </div>
          </div>
        </div>
        <Comments 
          comments={comments}
          newComment={newComment}
          handleCommentChange={handleCommentChange}
          handleSubmitComment={handleSubmitComment}
        />
      </div>
      <div className="footer__photo">
        <Footer />
        </div>
    </main>
  );
}

export default PhotoPage;
