
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quoteInfo, setQuoteInfo] = useState({})

  useEffect(() => {
    getQuote();
  }, [])
  const getQuote = () => {
    fetch('https://api.quotable.io/random')
    .then((response) => {
      return response.json();
  })
  .then((data) => {
    setQuoteInfo({
      text: data.content ,
      author: data.author,
      quote: data.quote,
    })
  })
}
  return (

      <div id="quote-box">
        <div
          className="quote-content"

        >
          <h2 id="text">

            {quoteInfo.text}

          </h2>
          <h4 id="author">- {quoteInfo.author}</h4>
        </div>
        
        <div className="buttons">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quoteInfo.quote}`}
            id="tweet-quote"
          > share on tweet
          </a>
          <button
            id="new-quote"
            onClick={getQuote}
          >
            Change Quote
          </button>
        </div>
      </div>
  );
}

export default App;
