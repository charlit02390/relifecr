'use strict';
var logger = require('winston');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var institutionsRepository = require(__base + 'server/infrastructure/resources').institutions;

function getInstitutions() {
    var result;
    logger.debug('selecting all Institutions');
    try {
        result = await(institutionsRepository.getInstitutions());
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { institutions: result };
}

function getInstitution(id) {
    var result;
    logger.debug('selecting all Institutions');
    try {
        result = await(institutionsRepository.getInstitution(id));
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { institutions: result };
}

function addInstitution(data) {
    var result;
    logger.debug('add Institution');
    try {
        result = await(institutionsRepository.addInstitution(data));
    } catch (error) {
        throw error;
    }

    return { addInstitution: result };
}

function updateInstitution(data) {
    var result;
    logger.debug('update Institution');
    try {
        result = await(institutionsRepository.updateInstitution(data));
    } catch (error) {
        throw error;
    }

    return { addInstitution: result };
}

function deleteInstitution(data) {
    var result;
    logger.debug('delete Institution');
    try {
        result = await(institutionsRepository.deleteInstitution(data));
    } catch (error) {
        throw error;
    }

    return { addInstitution: result };
}



module.exports = {};
module.exports.getInstitutions = async(getInstitutions);
module.exports.getInstitution = async(getInstitution);
module.exports.addInstitution = async(addInstitution);
module.exports.updateInstitution = async(updateInstitution);
module.exports.deleteInstitution = async(deleteInstitution);