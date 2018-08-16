'use strict';
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');


function configure(app) {
    app.use(bodyParser.json());
    app.set('view engine', 'html');
    app.use(express.static(__base + '/dist'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());

    app.use(function(req, res, next) {
        res.locals.ip = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
        next();
    });
}
module.exports = configure;