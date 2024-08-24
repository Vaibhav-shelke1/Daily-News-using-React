// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Article from './components/Article';
import Header from './components/Header';
import { searchNews, getCategoryNews } from './api';


const API_KEY = "fc79901190a24c0182c7fe32e6d18267";

function App() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(''); // To manage category-based news

  useEffect(() => {
    const fetchNews = async () => {
      let articles = [];
      if (searchTerm) {
        articles = await searchNews(searchTerm);
      } else if (category) {
        articles = await getCategoryNews(category);
      } else {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
        const response = await axios.get(url);
        articles = response.data.articles;
      }
      setNews(articles);
    };

    fetchNews();
  }, [searchTerm, category]);

  const handleSearch = (query) => {
    setSearchTerm(query);
    setCategory(''); // Clear category filter
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
    setSearchTerm(''); // Clear search term
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
      <div className='gap'></div>
      <div className='news'>
        {news.length > 0 ? (
          news.map((article, index) => (
            <Article 
              key={index} 
              title={article.title}
              url={article.url} 
              urlToImage={article.urlToImage} 
              content={article.content} 
              publishedAt={article.publishedAt} 
            />
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
}

export default App;
