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
    //capitalize first letter of the input country
    let country
      country = req.body.country.charAt(0).toUpperCase() + req.body.country.slice(1).toLowerCase()
      console.log('country', country)

    //check the country code from countries table
    let response = await db.query('SELECT country_code FROM countries WHERE country_name = $1', [country])
    console.log('response',response)

    if (response.rows.lenght !== 0){
      let country_code = response.rows[0].country_code

      //add the country code to visited_countries table
      await db.query('INSERT INTO visited_countries (country_code) VALUES ($1)',[country_code])
      //reload the countries with get / after update the country
      res.redirect("/")
    }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
