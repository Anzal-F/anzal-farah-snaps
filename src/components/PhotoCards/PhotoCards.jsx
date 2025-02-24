import React from 'react';
import { Link } from "react-router-dom";
import "./PhotoCards.scss";

export default function PhotoCards({ photo }) {
  return (
    <Link to={`/photo/${photo.id}`} className="photo-card-link">
      <div className="photo-card">
        <img src={photo.photo} alt={photo.photoDescription} className="photo-img" />
        <h3 className="photo-photographer">{photo.photographer}</h3>
        <div className="tags-photo">
          {photo.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
<<<<<<< HEAD
    </div>
=======
      </div>
    </Link>
>>>>>>> develop
  );
}