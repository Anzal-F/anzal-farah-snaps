import React from 'react';
import "./FilterContainer.scss";

function FilterContainer({ tags, selectedTag, onFilterSelect, isOpen }) {

    
  return (
    <div className={`tags-container ${isOpen ? "show" : ""}`}>
        <div className="filter-head">Filter</div>
        <div className="all-tags">
            {isOpen &&
            tags.map((tag) => (
                <button
                key={tag}
                className={`tag-btn ${selectedTag === tag ? "active" : ""}`}
                onClick={() => onFilterSelect(tag)}
                >
                {tag}
                </button>
            ))}
        </div>
    </div>
  )
}

export default FilterContainer
