import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session"
import passport from "passport";
import { Strategy } from "passport-local";

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.use(session({
  secret: "TOPSECRETWORD",
  resave: false, //to save the session to the database but in this case we'll save it to our server
  saveUninitialized: true //store uninitialize session to our server memory

}))

//passport module has to go after session
app.use(passport.initialize())
app.use(passport.session())

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "123456",
  port: 5432,
});
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

//go directly to secrets page when already logged in
app.get("/secrets", (req,res) => {
  //user comes from the verify function in passport strategy
  console.log(req.user)//{id: 8, email: 'user6@email.com', password: '$2b$10$5kMDTTc7d0jjo.GK/V5sYeBC9FJQ2a5sNAKHyhS7Ua4cis0WQ9DBW'}
  if (req.isAuthenticated()){
    res.render("secrets.ejs")
  } else {
    res.render("login.ejs")
  }
})

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      //hashing the password and saving it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed Password:", hash);
          await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2)",
            [email, hash]
          );
          res.render("secrets.ejs");
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

//use passport instead of (req, res) => {} 
app.post(
  "/login", 
  passport.authenticate("local", {
  successRedirect: "/secrets",
  failureRedirect: "/login"
}))

//add stragegy right before app.listen
passport.use(new Strategy(async function verify(username, password, cb){
  //1. create new Strategy with a function called verify
  //2. passing value names that matches the form in ejs file instead of using req.body and a call back
  //3. code the logic (in this case, it's the same as in /login )
  console.log(username, password)
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      username,
    ])
    if (result.rows.length > 0) {
      const user = result.rows[0]
      const storedHashedPassword = user.password
      bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (err) {
          //Error comparing passwords
          return cb(err)
        } else {
          if (result) {
            //if success return error as null and data of that user
            return cb(null, user)
          } else {
            //when user type Incorrect Password, not an error from passport, set isAuthenticated value to false
            return cb(null, false)
          }
        }
      })
    } else {
      //set the error as "User not found"
      return cb("User not found")
    }
  } catch (err) {
    //in case our database query goes wrong
    return cb(err)
  }
}))

//safe the data that the user login to local storage
passport.serializeUser((user,cb) => {
  cb(null, user)
})

passport.deserializeUser((user,cb) => {
  cb(null, user)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
