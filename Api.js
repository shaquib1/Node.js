let http = require('http');
let dataapi =require('./dataapi');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(dataapi));
    resp.end();
}).listen(5000);
