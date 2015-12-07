var express = require('express');
var app = express();
var path = require('path');
var FirebaseTokenGenerator = require("firebase-token-generator");

app.use(express.static('./'));

var tokenGenerator = new FirebaseTokenGenerator("WbekgyPe55xRsg6GeQwnSM4J4rYk2WXVn80uXDw2");
var token = tokenGenerator.createToken({uid: "1", some: "arbitrary", data: "here"});

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);