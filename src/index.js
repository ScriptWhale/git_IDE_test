let express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express();

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});