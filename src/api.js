// src/api.js
import axios from 'axios';

const API_KEY = "fc79901190a24c0182c7fe32e6d18267";
const BASE_URL = "https://newsapi.org/v2/";

export const searchNews = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}everything?q=${query}&apiKey=${API_KEY}`);
        return response.data.articles;
    } catch (error) {
        console.error("Error fetching search results:", error);
        return [];
    }
};

export const getCategoryNews = async (category) => {
    try {
        const response = await axios.get(`${BASE_URL}top-headlines?country=in&category=${category}&apiKey=${API_KEY}`);
        return response.data.articles;
    } catch (error) {
        console.error("Error fetching category news:", error);
        return [];
    }
};
