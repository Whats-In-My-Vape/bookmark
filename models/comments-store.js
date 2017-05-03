
'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');
const logger = require('../utils/logger');

const commentsStore = {
  
  store: new JsonStore('./models/comments-store.json', { commentCollection: [] }),
  collection: 'commentCollection',
  
  getAllComments() {
    return this.store.findAll(this.collection);
    },
  
  getCommentsCount() {
    return this.store.count(this.collection);
  },
  
  getComment(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addComment(comment) {
    this.store.add(this.collection, comment);
  },
};
module.exports = commentsStore;