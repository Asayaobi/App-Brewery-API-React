import express from "express";
import bodyParser from "body-parser";
import pg from 'pg'

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Permalist",
  password: "AsayaObi",
  port: 5432,
})

db.connect()

//default data
let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

//function
async function getItems() {
  let response = await db.query('SELECT * FROM items')
  items = response.rows
  console.log('items', items)
  return items
}

app.get("/", async (req, res) => {
  await getItems()
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  })
})

app.post("/add", async (req, res) => {
  const item = req.body.newItem
  await db.query('INSERT INTO items(title) VALUES($1)',[item])
  res.redirect("/")
})

app.post("/edit", (req, res) => {});

app.post("/delete", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
