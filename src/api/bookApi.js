"use strict";

var books = require('./bookModel').books;

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); // pass by value
};

var BookApi = {
	getAllBooks: function() {
		return _clone(books); 
	},
	
    //Add the rest of the  CRUD operation here
};

module.exports = BookApi;