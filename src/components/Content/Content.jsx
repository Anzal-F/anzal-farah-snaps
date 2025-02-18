import React from "react";
import "./Content.scss";
import Hero from "../Hero/Hero";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import FilterContainer from "../FilterContainer/FilterContainer";

function Content({ tags, selectedTag, onFilterSelect, isOpen, photos }) {
    
  return (
    <div className={`content ${isOpen ? "filter-open" : ""}`}>
      <div className="hero__photo">
        <Hero />
        <PhotosGallery photos={photos} />
      </div>
      
      <FilterContainer
        tags={tags}
        selectedTag={selectedTag}
        onFilterSelect={onFilterSelect}
        isOpen={isOpen}
      />
      
    </div>
    
  );
}

export default Content;
