import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Welcome to my site</h1>')
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact me</h1>')
});

app.get('/about', (req, res) => {
    res.send('<h1>About me</h1>')
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
});

