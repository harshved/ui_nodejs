var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(req,res){
      var query = url.parse(req.url).query;
      var name = querystring.parse(query)["name"];
      var password = querystring.parse(query)["password"];

      console.log(name);
      console.log(password);
}).listen(3000);