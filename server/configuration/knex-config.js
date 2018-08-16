'use strict';
var logger = require('winston');

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'ec2-52-36-200-181.us-west-2.compute.amazonaws.com',
    user : 'root',
    password : 'root',
    database : 'relifebd'
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