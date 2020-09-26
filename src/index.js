import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


//putting good old vanilla javascript along side react
const links = Array.from(document.querySelectorAll('.links > .link'))
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(link => link.classList.remove('link--active'))
    link.classList.add('link--active')
  })
})
