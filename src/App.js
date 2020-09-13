import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Extensions from "./components/Extensions";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";
import FAQ from "./components/FAQ";

import "./assets/css/main.css";

const App = () => {
  return (
    <main className="App">
      <Header />
      <Hero />
      <Features />
      <Extensions />
      <FAQ />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default App;
