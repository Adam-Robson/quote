import React, { useState } from 'react';
import './App.css';

import { quotes } from './data.js';

export default function App() {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    const number = Math.floor(Math.random() * quotes.length);
    setIndex(number);
    quote = quotes[number];
    return quote;
  };
  let quote = quotes[index];

  return (
    <>
      <div id="home-wrapper">
        <section className="quote-container">
          <h3 id="quote-title">quote for the day</h3>
          <div className="quote-box">
            <h4 id="text">{ quote.text }</h4>
            <div className="author-wrap">
              <h4 id="author">-{ quote.author }</h4>
            </div>
            <div id="button-container">
              <button id="next-quote" onClick={ handleClick }>
                new quote
              </button>
              <a href="twitter.com/intent/tweet" target='_blank'>tweet quote</a>
            </div>
          </div>
        </section>
        <section className="image-container">
        </section>
      </div>
    </>
  );
}

