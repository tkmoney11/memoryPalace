import React from 'react';
import './App.css';

function App() {
  return (
    <div id="home">
      <h1 id="title1">WELCOME TO YOUR</h1>
      <h1 id="title2">MEMORY PALACE</h1>
      <div id="button-container">
        <div className="button">Begin</div>
        <a className="button" href="https://en.wikipedia.org/wiki/Method_of_loci" target="_blank" rel="noopener noreferrer"><div id="learn-more">Learn More</div></a>
      </div>
    </div>
  );
}

export default App;
