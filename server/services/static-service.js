'use strict';
var logger = require('winston');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var staticRepository = require(__base + 'server/infrastructure/resources').static;

function getRoles() {
    var result;
    logger.debug('selecting all roles');
    try {
        result = await(staticRepository.getRoles());
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { roles: result };
}

module.exports = {};
module.exports.getRoles = async(getRoles);