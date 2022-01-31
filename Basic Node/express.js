//1. BASIC Express 
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('HI Buds');
});
app.get('/about', (req,res) => {
    res.send('Hi buds from ABOUT page');
})
app.listen(3000);