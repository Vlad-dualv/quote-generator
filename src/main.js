import axios from 'axios';

const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuoteBtn = document.querySelector('.new-quote-btn');
const postBtn = document.querySelector('.post-btn');

/*------------------API--------------------*/

const myAxios = axios.create({
  baseURL: 'https://api.quotable.io',
});

async function getQuote() {
  const response = await myAxios.get('/quotes/random');
  const data = await response.data;
  quote.innerHTML = data[0].content;
  author.innerHTML = data[0].author;
}

getQuote();

function newQuote() {
  getQuote();
}

/*--------------------------------------------*/

function postQuote() {}

newQuoteBtn.addEventListener('click', newQuote);
