const quote = document.getElementById("quote")
const author = document.getElementById("author")
const quoteBtn = document.getElementById("quoteBtn")

quoteBtn.addEventListener("click", generateJoke)

generateJoke()

function generateJoke() {
    fetch("https://type.fit/api/quotes", {
        headers: {
            "Accept": "application/json"
        }
    }).then(res => res.json()).then(data => {
        // Quotes and authors were saved in an array of objects so in order to get random quotes this line of code was used.
        var numbers = Math.floor(Math.random() * 100) 
        quote.innerHTML = data[numbers].text
        author.innerHTML = data[numbers].author
    })
}
