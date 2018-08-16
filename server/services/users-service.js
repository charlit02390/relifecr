'use strict';
var logger = require('winston');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var usersRepository = require(__base + 'server/infrastructure/resources').users;


function login(data) {
    var result;
    logger.debug('login user service');
    try {
        var resultRep
        resultRep = await(usersRepository.login(data));
        logger.debug('result ' + resultRep.length);
        if(resultRep.length > 0) {
            var result= {userLogged: true}
        }
        else {
            var result= {userLogged: false}
        }
    } catch (error) {
        throw error;
    }

    return { user: result };
}

function getUsers() {
    var result;
    logger.debug('selecting all users');
    try {
        result = await(usersRepository.getUsers());
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { users: result };
}

function getUser(id) {
    var result;
    logger.debug('selecting all users');
    try {
        result = await(usersRepository.getUser(id));
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { users: result };
}

function addUser(data) {
    var result;
    logger.debug('add user');
    try {
        result = await(usersRepository.addUser(data));
    } catch (error) {
        throw error;
    }

    return { adduser: result };
}

function updateUser(data) {
    var result;
    logger.debug('update user');
    try {
        result = await(usersRepository.updateUser(data));
    } catch (error) {
        throw error;
    }

    return { adduser: result };
}

function deleteUser(id) {
    var result;
    logger.debug('delete user');
    try {
        result = await(usersRepository.deleteUser(id));
    } catch (error) {
        throw error;
    }

    return { adduser: result };
}



module.exports = {};
module.exports.login = async(login);
module.exports.getUsers = async(getUsers);
module.exports.getUser = async(getUser);
module.exports.addUser = async(addUser);
module.exports.updateUser = async(updateUser);
module.exports.deleteUser = async(deleteUser);