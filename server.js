var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
    if(req.url=="/"){
        fs.readFile("./lib/index.html", function (err, html) {
             res.writeHeader(200, {"Content-Type": "text/html"});
             res.write(html);
             res.end();
        });
    } else if(req.url=="/localScripts.js"){
        fs.readFile("./lib/localScripts.js", function (err, js) {
             res.writeHeader(200, {"Content-Type": "text/javascript"});
             res.write(js);
             res.end();
        });
    }

}).listen(8080);
