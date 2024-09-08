import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

//define pg
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Secrets",
  password: "AsayaObi",
  port: 5432,
})

//run database
db.connect()

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username
  const password = req.body.password
  try{
  //first check if the email already exist
  let result = await db.query('SELECT * FROM users WHERE email = $1', [email])
  //if the email exists, send back the error
  if (result.rows.length > 0){
    res.send('Email already exists, try logging in')
  } else {
  //if email doesn't exist, create new user
    await db.query('INSERT INTO users(email, password) VALUES ($1, $2)', [email,password])
    res.render('secrets.ejs')
  }
  } catch (err){
    console.log(err)
  }
})

app.post("/login", async (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
