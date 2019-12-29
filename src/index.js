let express = require('express'),
    fs = require('fs'),
    app = express();

let port = 3000;

app.get('/', function (req, res) {
    fs.readFile('./views/index.html', function(err, data){
        res.writeHead('200',{'Content-Type' : 'text/html'});
        res.end(data);
    });
});

app.listen(port, function () {
    console.log('Server Start!');
});