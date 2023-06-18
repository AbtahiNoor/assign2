const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Stay hungry, stay foolish. - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer"
];

const quoteBox = document.getElementById('quote');
const colorButtons = document.getElementsByClassName('color-btn');


function setRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteBox.textContent = quotes[randomIndex];
}

function changeBoxColors(color) {
  const randomFontColor = getRandomColor();
  quoteBox.style.color = randomFontColor;
  quoteBox.style.borderColor = color;
  quoteBox.style.backgroundColor = color;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


for (let i = 0; i < colorButtons.length; i++) {
  colorButtons[i].addEventListener('click', function() {
    const color = window.getComputedStyle(this).backgroundColor;
    changeBoxColors(color);
  });
}


setRandomQuote();
changeBoxColors('#333'); 