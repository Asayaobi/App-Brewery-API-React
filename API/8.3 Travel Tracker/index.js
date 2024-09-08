import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

//create a connection
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "World",
  password: "AsayaObi",
  port: 5432,
})
db.connect()
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let country_codes
//function
async function checkVisitedCountries() {
  let response = await db.query("SELECT country_code FROM visited_countries")
    let responseCountries = response.rows
    //responseCountries = [{ country_code: 'FR' },{ country_code: 'US' }, { country_code: 'GB' }]
    //country_codes = [ 'FR', 'US', 'GB' ]
    country_codes = responseCountries.map(country => country.country_code)
    return country_codes
}

app.get("/", async (req, res) => {
  try {
    country_codes = await checkVisitedCountries()
    res.render('index.ejs', {countries: country_codes, total: country_codes.length})
  } catch (error) {
    console.error(error.message)
  }
});


app.post("/add", async (req,res) => {
  try {
    let country = req.body.country
    //check the country code from countries table/ loosely match the country in case of incomplete name or upper/lowercase with LIKE, wildcards
    let response = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%'|| $1 ||'%'", [country.toLowerCase()])
    // If country_code is not found, no rows were returned, handle the error
    if (response.rowCount === 0) {
      throw new Error('Country does not exist, try again')
    }
    
    //add country_code to visited_countries table
    let country_code = response.rows[0].country_code
    await db.query('INSERT INTO visited_countries (country_code) VALUES ($1)',[country_code])

    //in visited_countries table, country_code is set to unique, it'll show an error 'Duplicate key value violates unique constraint' with error.code === '23505'
    //if counrty_code is a new country and get posted, reload the countries with get / after update the country
    res.redirect("/")

  } catch (error) {
    console.error(error.message)

    // modify message for 'Duplicate key value violates unique constraint'
    if (error.code === '23505') {
      error.message = 'Country has already been added, try again';
    }
    //pass all of the data including error message
    country_codes = await checkVisitedCountries()
    res.render('index.ejs', {countries: country_codes, total: country_codes.length, error: error.message})
  }

})
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
