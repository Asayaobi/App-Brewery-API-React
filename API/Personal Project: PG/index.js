import express from "express"
import bodyParser from "body-parser"
import pg from "pg"

//create a connection
const db = new pg.Client({
  user: "xxxxxx",
  host: "xxxxxx",
  database: "xxxxxx",
  password: "xxxxxx",
  port: 5432,
})
db.connect()

//data from quotes.json
let quotes = data
// console.log('quotes', quotes)

//data from pg
let pgquotes
//function
async function getQuotes() {
  let response = await db.query("SELECT * FROM quotes")
    pgquotes = response.rows
    console.log('pg',pgquotes)
    return pgquotes
}

const app = express()
const port = 3000

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

//render quotes in index.ejs
app.get("/", async (req, res) => {
  await getQuotes()
  res.render("index.ejs",{quotes:pgquotes})
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
