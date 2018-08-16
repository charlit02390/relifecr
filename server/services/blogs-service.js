'use strict';
var logger = require('winston');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var blogsRepository = require(__base + 'server/infrastructure/resources').blogs;

function getBlogsApprovedbyType(typeId) {
    var result;
    logger.debug('selecting blogs by type approved');
    try {
        result = await(blogsRepository.getBlogsApprovedbyType(typeId));
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { blogs: result };
}

function getBlogsUnapproved() {
    var result;
    logger.debug('selecting blogs unapproved');
    try {
        result = await(blogsRepository.getBlogs());
        logger.debug('result length  ' + result.length);
    } catch (error) {
        throw error;
    }

    return { blogs: result };
}

function addBlog(data) {
    var result;
    logger.debug('add Blog');
    try {
        result = await(blogsRepository.addBlog(data));
    } catch (error) {
        throw error;
    }

    return { addBlog: result };
}

function updateBlog(data) {
    var result;
    logger.debug('update Blog');
    try {
        result = await(blogsRepository.updateBlog(data));
    } catch (error) {
        throw error;
    }

    return { updateBlog: result };
}

function deleteInstitution(id) {
    var result;
    logger.debug('delete Institution');
    try {
        result = await(blogsRepository.deleteBlog(id));
    } catch (error) {
        throw error;
    }

    return { addInstitution: result };
}


module.exports = {};
module.exports.getBlogsApprovedbyType = async(getBlogsApprovedbyType);
module.exports.getBlogsUnapproved = async(getBlogsUnapproved);
module.exports.addBlog = async(addBlog);
module.exports.updateBlog = async(updateBlog);