import express from "express"
import bodyParser from "body-parser"
import pg from "pg"
import dotenv from "dotenv"

//create a connection
dotenv.config()

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})
db.connect()

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
