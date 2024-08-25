import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "username321";
const yourPassword = "username321";
const yourAPIKey = "86708b06-8f37-469d-a1c1-67179b9988df";
const yourBearerToken = "13c118be-3666-4588-9466-8dafb5463c8c";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try{
    const response = await axios.get(`${API_URL}random`)
    const jsonData = JSON.stringify(response.data) 
    console.log('response', jsonData)
    res.render("index.ejs", { content:jsonData})
  }catch (error) {
    res.status(404).send("Error:", error.message,)
  }
});

app.get("/basicAuth",async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
 try {
    const response = await axios.get(`${API_URL}all?page=2`, {
    auth: {
      username: yourUsername,
      password: yourPassword,
    },
  });
    const jsonData = JSON.stringify(response.data) 
    console.log('response', jsonData)
    res.render("index.ejs", { content:jsonData})
 }catch (error) {
  res.status(404).send("Error:", error.message,)
}
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  try{
    const response = await axios.get(`${API_URL}filter`, {
      params: {
          apiKey: yourAPIKey,
          score: 5
      }
  })
      const jsonData = JSON.stringify(response.data)
      res.render('index.ejs', {content: jsonData})
  } catch (error){
    res.status(404).send("Error:", error.message,)
  }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
 try {
    const response = await axios.get(`${API_URL}secrets/42`, {
      headers: { 
        Authorization: `Bearer ${yourBearerToken}` 
      },
    })
    console.log(response.data)
    const jsonData = JSON.stringify(response.data)
    res.render('index.ejs', { content: jsonData})
 } catch (error){
  res.status(404).send("Error:", error.message,)
}
 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
