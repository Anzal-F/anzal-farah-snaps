import React from 'react';
import "./PhotoCards.scss";

export default function PhotoCards({ photo }) {
  return (
    <div className="photo-card">
      <img src={photo.photo} alt={photo.photoDescription} className="photo-img" />
      <h3 className='photo-photographer'>{photo.photographer}</h3>
      <div className="tags-photo">
            {photo.tags.map((tag, index) => (
                <span key={index} className="tag">
                {tag}
                </span>
            ))}
        </div>
    </div>
  );
}