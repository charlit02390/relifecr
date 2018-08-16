var logger = require('winston');
var knex = require(__base + 'server/configuration').knex.knex;
var mysql = require('mysql');
var fs = require('fs');
var Promise = require('bluebird');

function login(data,cb) {
    knex.select('*').from('users')
        .where('username','=',data.userName)
        .andWhere('password', data.password)
            .then(function (results) {
                return cb(null, results);
            })
            .catch(function (reason) {
                logger.error(reason.message);
                return cb(reason.message, null);
            });
}

function getUsers(cb) {
    knex.select('*').from('users')
        .then(function (results) {
            return cb(null, results);
        })
        .catch(function (reason) {
            logger.error(reason);
            return cb(reason.message, null);
        });
}

function getUser(id,cb) {
    knex.select('*').from('users')
        .where('idusers','=',id)
            .then(function (results) {
                return cb(null, results);
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
}

function addUser(data,cb) {
    logger.info(data);
    knex('users').insert({username:data.userName,
            password:data.password,
            name:data.name,
            lastname:data.lastName,
            role:data.idroles,
            institution:data.idinstitution,
            email:data.email}).then(function(result){
                return cb(null,'Success!');
            })
    
}

function updateUser(data,cb) {
    knex('users')
        .where('idusers','=',data.idUsers)
        .update({userName:data.userName,
            password:data.password,
            name:data.name,
            lastname:data.lastname,
            role:data.idroles,
            institution:data.idinstitution,
            email:data.email}).then(function(result){
                return cb(null,'Success!');
            })
    
}

function deleteUser(data,cb) {
    for (var i = 0; i < data.length; i++) {
        knex('users')
            .where('idusers','=',data[i].idusers)
            .del().then(function(result){
                return cb(null,'Success!');
            })
    }
    
    
}

module.exports = {
    login : Promise.promisify(login),
    getUsers: Promise.promisify(getUsers),
    getUser: Promise.promisify(getUser),
    addUser: Promise.promisify(addUser),
    updateUser: Promise.promisify(updateUser),
    deleteUser: Promise.promisify(deleteUser),
};