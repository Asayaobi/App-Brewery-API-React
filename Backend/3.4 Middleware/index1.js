import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
//body parser middleware
import bodyParser from 'body-parser'

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//mount body parser middleware using express to read data from req.body
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//write post handler to console log the content
app.post("/submit", (req,res) => {
  console.log(req.body)//{ text: 'hello' }
  // res.send(req.body)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
