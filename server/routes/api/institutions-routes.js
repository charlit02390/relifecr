'use strict';
var logger = require('winston');
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getInstitutions(request, response) {
    logger.debug('get institutions info');
    var result;
    try {
        logger.debug('retrieving result Institutions ');
        result = await (service.institutionsService.getInstitutions());
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function getInstitution(request, response) {
    logger.debug('get institutions info');
    var result;
    try {
        logger.debug('retrieving result Institutions ');
        result = await (service.institutionsService.getInstitution(request.params.InstitutionId));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function addInstitution(request, response) {
    logger.debug('add Institution info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.institutionsService.addInstitution(request.body.institution));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateInstitution(request, response) {
    logger.debug('update Institution info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.institutionsService.updateInstitution(request.body.institution));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteInstitution(request, response) {
    logger.debug('delete Institution info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.institutionsService.deleteInstitution(request.body.institutions));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}


routes.get('/', async(getInstitutions));
routes.get('/:InstitutionId', async(getInstitution));
routes.post('/', async(addInstitution));
routes.put('/', async(updateInstitution));
routes.delete('/', async(deleteInstitution));


module.exports = routes;


