import React from 'react';
// import Goku1 from '../assets/goku1.png';
import MyGif from '../assets/he.gif';

import './Preloader.css';
export default function Preloader() {
  
//   const quotes = [
//     // {quote: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine"},
//     // {quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein"},
//     {
//       quote:
//         "It's unbelievable how much you don't know about the game you've been playing all your life.",
//       author: 'Mickey Mantel',
//     },
//     { quote: 'If you know more than others, you will be the loneliest.', author: 'Vedant' },
//     {
//       quote: 'You’ll laugh at your fears when you find out who you really are.',
//       author: 'Picollo',
//     },
//   ];
//   const random = Math.floor(Math.random() * quotes.length);
  return (
    <div className="preloader">
      <div >
        <img className=" gif" src={MyGif} alt="" />
      </div>
      {/* <div className="lds-ripple">
        <div></div>
        <div></div>
      </div> */}
    </div>
  );
}
