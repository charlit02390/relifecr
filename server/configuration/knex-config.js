'use strict';
var logger = require('winston');

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'refilebd'
  }
});

logger.info('EDB - Connecting to localhost as root');

knex.on('disconnect', function(error) {
    if (error) {
        logger.error('Error on relife connection: ', error);
        throw error;
    }
});

knex.client.driver.maxRows = 1000;

module.exports = {};
module.exports.knex= knex;