//1. BASIC Express 
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const staticPath = path.join(__dirname, "public");
console.log(staticPath);
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});
app.get('/about', (req,res) => {
    res.send('Welcome to About Page');
});
app.get('/contact', (req,res) => {
    res.send('Welcome to Contact Page');
});
app.get('*', (req,res) => {
    res.send('404 Bad Request');
});
app.listen(port, ()=> {
    console.log(`Listening to the Port no. ${port}`)
});