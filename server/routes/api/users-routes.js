'use strict';
var logger = require('winston');
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function login(request, response) {
    logger.debug('login to site');
    var result;
    try {
        logger.debug('login the user '+ request.body.user);
        result = await (service.usersService.login(request.body.user));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function getUsers(request, response) {
    logger.debug('get institutions info');
    var result;
    try {
        logger.debug('retrieving result users ');
        result = await (service.usersService.getUsers());
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function getUser(request, response) {
    logger.debug('get institutions info');
    var result;
    try {
        logger.debug('retrieving result users ');
        result = await (service.usersService.getUser(request.params.userId));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function addUser(request, response) {
    logger.debug('add user info');
    var result;
    try { 
        console.log(request.body);
        result = await (service.usersService.addUser(request.body.user));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateUser(request, response) {
    logger.debug('update user info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.usersService.updateUser(request.body.user));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteUser(request, response) {
    logger.debug('delete user info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.usersService.deleteUser(request.body.users));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}


routes.post('/login', async(login));
routes.get('/', async(getUsers));
routes.get('/:userId', async(getUser));
routes.post('/', async(addUser));
routes.put('/', async(updateUser));
routes.delete('/', async(deleteUser));


module.exports = routes;
