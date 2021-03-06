
'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');
const logger = require('../utils/logger');

const bookmarkStore = {

  store: new JsonStore('./models/bookmark-store.json', { bookmarkCollection: [] }),
  collection: 'bookmarkCollection',

  
  getAllBookmarks() {
    return this.store.findAll(this.collection);
    },
 
  getBookmarksCount() {
    return this.store.count(this.collection);
  },
  
   getBookmark(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addBookmark(bookmark) {
    this.store.add(this.collection, bookmark);
  },

  removeBookmark(id) {
    const bookmark = this.getBookmark(id);
    this.store.remove(this.collection, bookmark);
  },

  removeAllBookmarks() {
    this.store.removeAll(this.collection);
  },

  addLink(id, link) {
    const bookmark = this.getBookmark(id);
    bookmark.link.push(link);
  },

  removeLink(id, linkId) {
    const bookmark = this.getBookmark(id);
    const link = bookmark.link;
    _.remove(link, { id: linkId});
  },
  
};

module.exports = bookmarkStore;
