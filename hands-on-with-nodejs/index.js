//1
//console.log("Node js is installed")

//2
/*var arr = [1,2,3,4,5,6,7,8,10,134,4];
var count = 0;
arr.forEach(element => {
    count++;
});
console.log("Count : ", count);
*/

//3 , 4
/*var add = (a,b) => {
    return a+b;
}
var name = (yourname) => {
    return yourname;
}

var multiply = (a,b) => {
    return a*b;
}
module.exports = {add,name,multiply};
*/

//5
/*var http = require("http") //it imports the http
var server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("Hello to my server");
    res.end();
}).listen(3000);

console.log("Server is started");
*/
 
//6
/*
var http = require("http");
http.createServer(function(req, res){
    if(req.url == "/student"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Student Page</h1>");
        res.end();
    }else if(req.url == "/admin"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Admin Page</h1>");
        res.end();
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Default Page</h1>");
        res.end();
    }
}).listen(3000);
*/

//7
var name = {
    fname: "Harsh",
    lname: "Ved"
};
module.exports = {name};