let realData = "";
let quotesData = "";
const quotes = document.getElementById("quote");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");

const tweetNow = () => {
  let post = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
  window.open(post);
};

const getNewQuotes = () => {
  let rnum = Math.floor(Math.random() * 1500);
  quotes.innerText = `${realData[rnum].text}`;
  quotesData = realData[rnum];
  if (realData[rnum].author == null) {
    author.innerText = "Unknown";
  } else {
    author.innerText = `${realData[rnum].author}`;
  }
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
  } catch (error) {}
};

newQ.addEventListener("click", getNewQuotes);
tweetMe.addEventListener("click", tweetNow);

getQuotes();