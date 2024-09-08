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

app.post("/login", async (req, res) => {
  const email = req.body.username
  const password = req.body.password
  try{
    //get the password from that user's email, send back user is not found in case email doesn't exist
    let response = await db.query('SELECT * FROM users WHERE email = $1' , [email])
    console.log('user detail', response.rows) //[ { id: 1, email: 'user1@email.com', password: '111111' } ]
  if (response.rowCount === 1){
   //compare the stored password and input password
   const storedPassword = response.rows[0].password
   if (password === storedPassword) {
    res.render('secrets.ejs')
   } else {
    res.send('Password is not correct, please try again')
   }
  } else {
    res.send('user is not found')
  }
  } catch (err) {
    console.log(err)
  } 
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
