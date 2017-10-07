import mongoose from './config/mongoose';
import express from './config/express';
import passport from './config/passport';


process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3000;

// ไปเรียกใช้ function ที่เรียกว่า express มา
var db = mongoose();
var app = express();
var psp = passport();

app.listen(process.env.PORT, () => {
       console.log('Starting node.js on port ' + process.env.PORT);
});

// exports ตัว app ที่เป็น services ไว้ ให้ตัวอื่นมาเรียกใช้ได้
module.exports = app;

/*var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('num', 1);
var num = app.get('num');
console.log(num); //1

app.use(function(req, res, next) {
    console.log('Record timestamp');
    next();
});

app.use(bodyParser.json());*/

// plus
/*app.post('/calculator/rest/plus', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var object = {
        "x": x,
        "y": y,
        "result": x + y
    }
    res.json(object);
}); */

// kbtotb
/*app.post('/calculator/rest/kbtotb', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var object = {
        "x": x,
        "result": x * Math.pow(10, -9)
    }
    res.json(object);
}); */

// cmtoinch
/*app.post('/calculator/rest/cmtoinch', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var object = {
        "x": x,
        "result": x * (39 * Math.pow(10, -2))
    }
    res.json(object);
});

app.get('/help', function(req, res, next) {
    res.send('Help me');
});

app.listen(3000, function() {
    console.log('Starting node on port 3000');
});*/