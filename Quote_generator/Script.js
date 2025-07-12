const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    text: "So many books, so little time.",
    author: "Frank Zappa"
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  }
];

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `— ${quote.author}`;
}

// Show a quote on page load
window.onload = getRandomQuote;

// Show a new quote on button click
newQuoteBtn.addEventListener("click", getRandomQuote);
