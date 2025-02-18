import React from 'react'
import PhotoCards from '../PhotoCards/PhotoCards';
import "./PhotosGallery.scss"

export default function PhotosGallery({photos}) {
    return (
        <div className="photos-grid">
          {photos.length > 0 ? (
            photos.map((photo) => <PhotoCards key={photo.id} photo={photo} />)
          ) : (
            <p>No photos available.</p>
          )}
        </div>
    );
}