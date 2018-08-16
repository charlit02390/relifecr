'use strict';
var logger = require('winston');
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getBlogsApprovedByType(request, response) {
    logger.debug('get blogs info approved');
    var result;
    try {
        logger.debug('retrieving result blogs by type '+ request.params.typeId);
        result = await (service.blogsService.getBlogsApprovedbyType(request.params.typeId));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function getBlogsUnapproved(request, response) {
    logger.debug('get blogs info unapproved');
    var result;
    try {
        logger.debug('retrieving result unapproved blogs  ');
        result = await (service.blogsService.getBlogsUnapproved());
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function addBlog(request, response) {
    logger.debug('add blog info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.blogsService.addBlog(request.body.blog));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateBlog(request, response) {
    logger.debug('update blog info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.blogsService.updateBlog(request.body.blog));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteBlog(request, response) {
    logger.debug('delete blog info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.blogsService.deleteBlog(request.params.blogId));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}


routes.get('/:typeId', async(getBlogsApprovedByType));
routes.get('/', async(getBlogsUnapproved));
routes.post('/',async(addBlog));
routes.put('/',async(updateBlog));
routes.delete('/:blogId',async(deleteBlog));




module.exports = routes;
