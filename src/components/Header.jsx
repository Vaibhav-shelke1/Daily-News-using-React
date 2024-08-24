// src/components/Header.js
import React, { useState } from 'react';

function Header({ onSearch, onCategoryChange }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top fixed-top" style={{ backgroundColor: "#cecece", marginBottom: "40px" }}>
      <a className="navbar-brand" href="/" style={{ fontWeight: "700", fontSize: "22px" }}> 
        <span style={{ color: "rgb(7, 6, 6)" }}>Daily <span style={{ color: "red" }}>News</span> </span> 
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSearchSubmit}>
          <input 
            className="form-control mr-sm-2" 
            type="search" 
            placeholder="Search" 
            value={searchInput} 
            onChange={(e) => setSearchInput(e.target.value)} 
            aria-label="Search" 
            style={{ width: "522px" }}
          />
          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
      <div className="dropdown">
        <button type="button" className="btn dropdown-toggle btn-outline-danger my-2 my-sm-0" data-toggle="dropdown">
          Category
        </button>
        <div className="dropdown-menu">
          <button className="dropdown-item" onClick={() => handleCategoryClick('business')}>Business</button>
          <button className="dropdown-item" onClick={() => handleCategoryClick('entertainment')}>Entertainment</button>
          <button className="dropdown-item" onClick={() => handleCategoryClick('general')}>General</button>
          <button className="dropdown-item" onClick={() => handleCategoryClick('health')}>Health</button>
          <button className="dropdown-item" onClick={() => handleCategoryClick('technology')}>Technology</button>
          <button className="dropdown-item" onClick={() => handleCategoryClick('sports')}>Sports</button>
          <button className="dropdown-item" onClick={() => handleCategoryClick('science')}>Science</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
