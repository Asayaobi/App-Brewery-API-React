import express from "express"
import bodyParser from "body-parser"
import data from './quotes.json' assert { type: 'json' }

//data from quotes.json
let quotes = data
// console.log('quotes', quotes)

const app = express()
const port = 3000

//without assert { type: 'json' } -> you need to convert json to javascript object with JSON.parse
// const quotes = JSON.parse(quotesJSON)
// console.log('quotes',quotes)

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

//render quotes in index.ejs
app.get("/", (req, res) => {
  res.render("index.ejs",{quotes:quotes})
})

// add new post
app.post("/addquote", (req, res) => {
  const {name, profilepicture, quote} = req.body

  //random profile pictures
  const pictures = ["https://openmoji.org/data/color/svg/1F49C.svg", "https://openmoji.org/data/color/svg/1F335.svg", "https://openmoji.org/data/color/svg/1F421.svg", "https://openmoji.org/data/color/svg/1F438.svg","https://openmoji.org/data/color/svg/1F9A5.svg"]
  const random = Math.floor(Math.random() * pictures.length)

  let newquote = {
      id: quotes.length + 1,
      name: req.body.name,
      profilepicture: req.body.profilepicture || pictures[random],
      quote: req.body.quote
    }

  quotes.push(newquote)
  res.render("index.ejs",{quotes:quotes})
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
