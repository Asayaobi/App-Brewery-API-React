import express from "express";
import bodyParser from "body-parser";
import quotes from './quotes.json' assert { type: 'json' };

//quotes from quotes.json
console.log('quotes', quotes)

const app = express();
const port = 3000;

//without assert { type: 'json' } -> you need to convert json to javascript object with JSON.parse
// const quotes = JSON.parse(quotesJSON)
// console.log('quotes',quotes)

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",{quotes:quotes});
});

// guide
// app.post("/recipe", (req, res) => {
//   if (req.body.choice === 'chicken') {
//     data = recipeObj[0]
//     res.render("index.ejs",{taco:data})
//   } else if (req.body.choice === 'beef') {
//     data = recipeObj[1]
//     res.render("index.ejs",{taco:data})
//   } else if (req.body.choice === 'fish') {
//     data = recipeObj[2]
//     res.render("index.ejs",{taco:data})
//   }

  // app.post("/recipe", (req, res) => {
  //   switch (req.body.choice) {
  //     case "chicken":
  //     data = recipeObj[0]
  //     break;
  //     case 'beef': 
  //     data = recipeObj[1]
  //     break;
  //     case 'fish': 
  //     data = recipeObj[2]
  //     break;
  //   }
  //   res.render("index.ejs",{taco:data})
  //   })


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
