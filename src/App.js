import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';

import './assets/css/main.css';

const App = () => {
  return (
    <main className='App'>
      <Header />
      <Hero />
      <Features />
    </main>
  );
};

export default App;
