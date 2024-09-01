import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "World",
  password: "AsayaObi",
  port: 5432,
})
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1

async function checkUsers() {
  try{
    let result = await db.query("SELECT * FROM users")
    console.log('result checkUser',result.rows)
    return result.rows
  } catch (error) {
    console.error(error.message)
  }
}

async function checkVisited() {
  try {
    console.log('checkVisited UserId',currentUserId)
    const result = await db.query('SELECT country_code FROM visited_countries JOIN users ON users.id = user_id WHERE user_id = $1', [currentUserId])

    //create countries array of country_code
    let countries = []
      result.rows.forEach((country) => {
      countries.push(country.country_code)
    })
    console.log('countries',countries)
    return countries

  } catch (error) {
    console.error(error.message)
  }
}

async function checkColor() {
  try {
    const result = await db.query('SELECT color FROM users WHERE id = $1',[currentUserId]);
    return result.rows[0].color
  } catch (error) {
    console.error(error.message)
  }
}

app.get("/", async (req, res) => {
  try {
  //get all users to display on the tabs
  const usersResult = await checkUsers()
  //get countries and color with currentUserId
  const countries = await checkVisited()
  const colorResult = await checkColor()
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: usersResult,
    color: colorResult,
  })
  } catch (error) {
    console.error(error.message)
  }
})

app.post("/add", async (req, res) => {
  try {
    let country = req.body.country
    //check the country code from countries table/ loosely match the country in case of incomplete name or upper/lowercase with LIKE, wildcards
    let response = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%'|| $1 ||'%'", [country.toLowerCase()])
    // If country_code is not found, no rows were returned, handle the error
    if (response.rowCount === 0) {
      throw new Error('Country does not exist, try again')
    }

    //add countryCode to visited_countries table
    let countryCode = response.rows[0].country_code
    await db.query('INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)',[countryCode, currentUserId])

    //in visited_countries table, country_code is set to unique, it'll show an error 'Duplicate key value violates unique constraint' with error.code === '23505'
    //if countryCode is a new country and get posted, reload the countries with get / after update the country
    res.redirect("/")

  } catch (error) {
    console.error(error.message)

    // modify message for 'Duplicate key value violates unique constraint'
    if (error.code === '23505') {
      error.message = 'Country has already been added, try again';
    }
    //pass all of the data including error message
    const usersResult = await checkUsers()
    const countries = await checkVisited()
    const colorResult = await checkColor()
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      users: usersResult,
      color: colorResult,
      error: error.message
    })
  }
})

app.post("/user", async (req, res) => {
  try {
    //show pages from selected tab bar
    if (req.body.add){
      res.render("new.ejs")
    }
    if (req.body.user){
    // set currentUserId
    currentUserId = req.body.user
    //get query for visited countries data of that user
    res.redirect("/")
  }
  }catch (error) {
    console.error(error.message)
  }
})

app.post("/new", async (req, res) => {
try {
  console.log('name',req.body.name, req.body.color)
  //post new user
  let response = await db.query(`INSERT INTO users (name, color) VALUES ($1, $2)`, [req.body.name, req.body.color])
  console.log('post new user', response)
  //if user is posted, redirect to homepage
  if (response.rowCount === 1) {
    res.redirect("/")
  }
} catch (error) {
  console.error(error.message)
}
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
})
