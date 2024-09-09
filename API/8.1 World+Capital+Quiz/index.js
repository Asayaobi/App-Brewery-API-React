import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

const app = express();
const port = 3000;

//define pg
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "World",
  password: "AsayaObi",
  port: 5432,
})

//run database
db.connect()

//defaut data
let quiz = [
  { country: "France", capital: "Paris" },
  { country: "United Kingdom", capital: "London" },
  { country: "United States of America", capital: "New York" },
];

let totalCorrect = 0;

//get data from the database
db.query("SELECT * FROM capitals", (err, res) => {
  if(err){
    console.error("Error executing query", err.stack)
  }else {
    quiz = res.rows
  }
  db.end()
})



// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim(); //use trim to eliminate extra space
  let isCorrect = false;
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) { //convert the format to lowercase
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;//add the checkmark to the button when it's correct
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];

  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
