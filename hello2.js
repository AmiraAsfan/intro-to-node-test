var http =require('http');
var fs =require('fs');
var url=require('url');
const port=process.env.port ||5000
http.createServer(function(req,res){
    var q=url.parse(req.url,true);
    var filename="."+q.pathname;
    if (filename =='./'){filename='./sample';}
    filename=filename +".html";
    fs.readFile(filename,function(err, data){
        if (err){
            res.writeHead(404,{'content-type':'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        console.log("...incoming" + req.url);
        return res.end();
    })
}).listen(8081);
console.log("server is listening on port 8081");