'use strict';
var logger = require('winston');
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getRoles(request, response) {
    logger.debug('get roles info');
    var result;
    try {
        logger.debug('retrieving result roles ');
        result = await (service.staticService.getRoles());
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/roles', async(getRoles));


module.exports = routes;
