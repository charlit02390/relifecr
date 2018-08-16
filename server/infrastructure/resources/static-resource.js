var logger = require('winston');
var knex = require(__base + 'server/configuration').knex.knex;
var mysql = require('mysql');
var fs = require('fs');
var Promise = require('bluebird');

function getRoles(cb) {
    knex.select('*').from('roles')
        .then(function (results) {
            return cb(null, results);
        })
        .catch(function (reason) {
            logger.info(reason.message);
            return cb(reason.message, null);
        });
}

module.exports = {
    getRoles: Promise.promisify(getRoles)
};