import "./style.css"

const quotes = document.querySelector('.quotes')
const authorName = document.querySelector(".author")
const genBtn = document.querySelector(".btn")
const copyBtn = document.getElementById('copy')
const twitterBtn = document.getElementById('twitter')
const speechBtn = document.getElementById('sp')


const myFun = () => {
  genBtn.textContent = "Please Wait....."
  fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
    quotes.innerHTML = `&ldquo;${result.content}&rdquo;`
    authorName.innerHTML = `&mdash;${result.author}`

    genBtn.textContent = "Next Quote"
  })
}

genBtn.addEventListener('click', myFun)

copyBtn.addEventListener('click', e => {
  navigator.clipboard.writeText(quotes.innerHTML)
})

speechBtn.addEventListener("click", (e) => {
  const utterance = new SpeechSynthesisUtterance(
    `${quotes.innerHTML}, by ${authorName.innerHTML}`
  );
  speechSynthesis.speak(utterance);
});

twitterBtn.addEventListener("click", (e) => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quotes.innerHTML}`;
  window.open(tweetUrl, `_blank`);
});