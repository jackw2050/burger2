/*var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
*/
//var orm = requre('orm.js');


//create orm functions here
var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.all('burgers', function(res){
			cb(res);
		});
	},
	create: function(cols, vals, cb) {
		console.log("create function in burger.js");
		console.log("cols " + cols);
		console.log("vals " + vals);
		console.log("exiting burger.create ----> orm.create\n");
		orm.create('burgers', cols, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		console.log("update function");
		orm.update('burgers', objColVals, condition, function(res){
			cb(res);
		});
	},
	delete: function(condition, cb){
		orm.delete('burgers', condition, function(res){
			cb(res);
		});
	}
};

module.exports = burger;
