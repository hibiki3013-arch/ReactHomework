import { useState } from 'react'
import { posts } from './data/posts.js';
import Header from './components/Header/index.jsx';
import Blog from './components/Blog/Blog.jsx';
import Inquiry from './components/Inquiry/inquiry.jsx';
import Article from './components/Article/Article.jsx'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';




function App() {
  return(
    <BrowserRouter>

    <Header />   

    <Routes>
    <Route path="/" element={<Blog />} />
    <Route path="/inquiry" element={<Inquiry />} />
    <Route path="/article/:id" element={<Article />} />
    </Routes>

    </BrowserRouter>
  );
  };



export default App;
