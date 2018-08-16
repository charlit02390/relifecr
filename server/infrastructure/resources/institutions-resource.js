var logger = require('winston');
var knex = require(__base + 'server/configuration').knex.knex;
var mysql = require('mysql');
var fs = require('fs');
var Promise = require('bluebird');

function getInstitutions(cb) {
    knex.select('*').from('institutions')
        .then(function (results) {
            return cb(null, results);
        })
        .catch(function (reason) {
            logger.error(reason);
            return cb(reason.message, null);
        });
}

function getInstitution(id,cb) {
    knex.select('*').from('institutions')
        .where('idinstitution','=',id)
            .then(function (results) {
                return cb(null, results);
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
}

function addInstitution(data,cb) {
    knex('institutions').insert({name:data.name,
            phone:data.phone,
            address:data.address,
            country:data.country,
            state:data.state,
            departament:data.departament,
            district:data.district}).then(function(result){
                return cb(null,'Success!');
            })
    
}

function updateInstitution(data,cb) {
    knex('institutions')
        .where('idinstitution','=',data.idInstitution)
        .update({name:data.name,
            phone:data.phone,
            address:data.address,
            country:data.country,
            state:data.state,
            departament:data.departament,
            district:data.district}).then(function(result){
                return cb(null,'Success!');
            })
    
}

function deleteInstitution(data,cb) {
    for (var i = 0; i < data.length; i++) {
        knex('institutions')
            .where('idinstitution','=',data[i].idinstitution)
            .del().then(function(result){
                return cb(null,'Success!');
            })
    }
    
}

module.exports = {
    getInstitutions: Promise.promisify(getInstitutions),
    getInstitution: Promise.promisify(getInstitution),
    addInstitution: Promise.promisify(addInstitution),
    updateInstitution: Promise.promisify(updateInstitution),
    deleteInstitution: Promise.promisify(deleteInstitution)
};