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