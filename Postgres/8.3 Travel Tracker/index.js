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

app.get("/", async (req, res) => {
  try {
    //Write your code here.
    let response = await db.query("SELECT country_code FROM visited_countries")
    let responseCountries = response.rows
    //responseCountries = [{ country_code: 'FR' },{ country_code: 'US' }, { country_code: 'GB' }]
    //country_codes = [ 'FR', 'US', 'GB' ]
    let country_codes = responseCountries.map(country => country.country_code)
    res.render('index.ejs', {countries: country_codes, total: country_codes.length})
    db.end()
  } catch (error) {
    console.error(error.message)
  }
});

app.post("/add", async (req,res) => {
  try{
    
  }catch(error){
    console.error(error.message)
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
