import React from 'react';

import Header from "./components/Header";
import Hero from './components/Hero'

import './assets/css/main.css';

const App = () => {
  return (
    <main className="App">
      <Header />
      <Hero />
    </main>
  );
}

export default App;
