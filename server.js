var http = require('http');
var server = http.createServer();
server.listen(8150);

var messages=[];

server.on('request', function(request, response){
console.log(request.method);

  

  switch(request.method){
    case "POST":

    response.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });

      var postData = '';
      request.on('data', function(chunk){
        postData+= chunk.toString();
      });
      request.on('end', function(){
        
        
        var jsonObj = JSON.parse(postData);
        
        response.statusCode = 201; 
        var time = new Date();
        var record = {
          message:jsonObj.message,
          time:time
        }
        messages.push(record);


        response.end(); 
      });
    break;
    case "GET":
      response.statusCode = 200;
      response.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      });
      response.write(JSON.stringify(messages));
      response.end();
    break;  
    case "OPTIONS":
      response.statusCode = 200;
      response.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      });
      response.end();
    break;
  }
})