'use strict';

const logger = require('../utils/logger');
const bookmarkStore = require('../models/bookmark-store');

const start = {
  index(request, response) {
    logger.info('start rendering');
    const viewData = {
      title: 'Welcome to Bookmark (mistake)',
      count: bookmarkStore.getBookmarksCount()
    };
    response.render('start', viewData);
  },
};

module.exports = start;