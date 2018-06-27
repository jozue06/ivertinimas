'use strict';
var app = app || {};


Article.all = [];

  class Article {
    constructor(rawDataObj) {
      Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
    }
    insertRecord(callback) {
      $.post('/articles', { author: this.author, body: this.body, category: this.category, publishedOn: this.publishedOn, title: this.title })
        .then(console.log)
        .then(callback);
    }
  }

  export default article;

 


