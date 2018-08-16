var logger = require('winston');
var knex = require(__base + 'server/configuration').knex.knex;
var mysql = require('mysql');
var fs = require('fs');
var Promise = require('bluebird');

function getBlogsApprovedbyType(typeId,cb) {
    knex.select('*').from('histories')
        .where('type',typeId)
        .andWhere('approved', 1)
            .then(function (results) {
                return cb(null, results);
            })
            .catch(function (reason) {
                logger.error(reason.message);
                return cb(reason.message, null);
            });
}

function getBlogs(cb) {
    logger.info("entro")
    knex.select('*').from('histories')
        .where('approved', 0)
            .then(function (results) {
                return cb(null, results);
            })
            .catch(function (reason) {
                logger.error(reason.message);
                return cb(reason.message, null);
            });
}

function addBlog(data,cb) {
    logger.info(data);
    knex('histories')
        .insert({type:data.type,
            title:data.title,
            body:data.body,
            user:data.user,
            approved:data.approved}).then(function(result){
                return cb(null,'Success!');
            })
    
}

function updateBlog(data,cb) {
    knex('histories')
        .where('idhistories','=',data.idhistories)
        .update({approved:data.approved}).then(function(result){
                return cb(null,'Success!');
            })
    
}

function deleteBlog(id,cb) {
    knex('histories')
        .where('idhistories','=',id)
        .del().then(function(result){
            return cb(null,'Success!');
        })
    
}



module.exports = {
    getBlogsApprovedbyType: Promise.promisify(getBlogsApprovedbyType),
    getBlogs: Promise.promisify(getBlogs),
    addBlog: Promise.promisify(addBlog),
    updateBlog: Promise.promisify(updateBlog),
    deleteBlog: Promise.promisify(deleteBlog)
};