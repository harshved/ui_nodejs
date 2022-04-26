//1. Server Created with Custom Page URL
var http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/html'})
    if(req.url == '/'){
        res.write('Home Page');    
    }else if(req.url == '/about'){
        res.write('About page');
    }else{
        res.writeHead(404, {'content-Type': 'text/html'})
        res.write('<h1>404 Page not found</h1>')
    }
    res.end()
}).listen(3000);
console.log('Server Started');

//2. EVENTS Example
var event = require('events');
var em = new event.EventEmitter();

em.on('myName', () => {
    console.log('My name is Harsh');
})
em.emit('myName');

//3 Express routing
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});
app.get('/about', (req,res) => {
    console.log(req);
    res.send('Welcome to About Page');
});
app.get('/contact', (req,res) => {
    res.send('Welcome to Contact Page');
});
app.listen(port, ()=> {
    console.log(`Listening to the Port no. ${port}`)
});