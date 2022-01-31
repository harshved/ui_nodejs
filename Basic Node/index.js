//1. Server Created with Custom Page URL
var http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/html'})
    if(req.url == '/'){
        res.write('Home Page');    
    }else if(req.url == '/about'){
        res.write('About page');
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
