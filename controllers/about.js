'use strict';

const logger = require('../utils/logger');
const commentStore = require('../models/comments-store');
const uuid = require('uuid');

const about = {
  index(request, response) {
    logger.info('about rendering');
    const viewData = {
      title: 'About Bookmark 1',
      comments: commentStore.getAllComments()
    };
    response.render('about', viewData);
  },
  
  addComment(request, response) {
    const commentId = uuid();
    const commentData = {
      id: commentId,
      alias: request.body.alias,
      criticism: request.body.criticism,
    };
    commentStore.addComment(commentData);
    response.redirect('/about');
  },
};

module.exports = about;
