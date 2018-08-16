'use strict';
var logger = require('winston');
function csrfValidator(error, request, response, next) {
    if (error.code !== 'EBADCSRFTOKEN') {
        return next(error);
    }
    logger.warn('Request made with invalid CSRF token');
    response.status(403);
    if (request.get('accept') === 'application/json') {
        response.setHeader('content-type', 'application/json');
        response.json({
            description: 'The form has been tampered with'
        });
    } else {
        response.send('The form has been tampered with');
    }
}

module.exports = csrfValidator;