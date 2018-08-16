'use strict';
var routes = require('express').Router();
var logger = require('winston');

function getCrsfToken(request, response) {
    logger.debug('GET: /token', request.path);
    response.setHeader('Content-Type', 'application/json');
    var token = request.csrfToken();
    response.locals._csrf = token;
    return response.status(200).json({csrfToken: token});
}

routes.get('/', getCrsfToken);

module.exports = routes;