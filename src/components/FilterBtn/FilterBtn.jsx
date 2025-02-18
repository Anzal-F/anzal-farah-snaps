import React from 'react';
import FilterLogo from "../../assets/Icons/Filter.svg";
import "./FilterBtn.scss";

export default function FilterBtn({ onClick }) {
  return (
    <div className="filter-container">
      <button className="filter-button" onClick={onClick}>
        Filter <img src={FilterLogo} alt="Filter" />
      </button>
    </div>
  );
}