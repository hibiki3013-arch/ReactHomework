import { useState } from 'react'
import { posts } from './data/posts.js';
import Header from './components/Header/index.jsx';
import Home from './components/Home/index.jsx';
import './components/Home/Home.module.css';
import './components/Header/Header.module.css';

function App() {
  return(
    <>
    <Header />
    <Home />

    </>
  );
  };



export default App;
