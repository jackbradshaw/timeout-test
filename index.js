var app = require('express')();
var http = require('http').Server(app);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.get('/axios', function (req, res) {
    res.sendFile(__dirname + '/node_modules/axios/dist/axios.js');
});

app.get('/test', function (request, response) {

});

http.listen(5000, function () {
    console.log('listening on *:5000');
});