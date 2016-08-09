/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//var orm = require('../config/orm.js');

var devMode = false;


router.get('/', function(req,res) {
    res.redirect('/burgers')
});


router.get('/burgers', function(req,res) {
    burger.all(function(data){
        var hbsObject = {burger : data}
    //console.log(hbsObject)
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function(req,res) {
    //console.log(req.body);
    burger.create(['burger_name', 'devoured'], [req.body.name, req.body.devoured], function(data){
        res.redirect('/burger')
    });
});

router.put('/burgers/update/:id', function(req,res) {
    var condition = 'id = ' + req.params.id;

//  console.log('condition', condition);

    burger.update({'devoured' : req.body.devoured}, condition, function(data){
        res.redirect('/burger');
    });
});

router.delete('/burgers/delete/:id', function(req,res) {
    var condition = 'id = ' + req.params.id;

    burger.delete(condition, function(data){
        res.redirect('/burger');
    });
});

module.exports = router;



/*


router.get("/", function(request, response){
    response.redirect('/burger')
})

router.get('/burger', function(request, response) {
    burger.all(function(data) {
        var hbsObject = { burger: data }
        console.log(hbsObject)
        response.render('index', hbsObject);
    });
});

router.post('/burger/create', function(request, response) {
    request.body.devoured = 0;
 //   console.log("router.post burger/create");
 //   console.log("request body " + request.body.burger_name);
 //   console.log("exiting controller ---> burger.create\n");
    burger.create(['burger_name', 'devoured'], [request.body.burger_name, request.body.devoured], function(data) {
        response.redirect('/burger');
    });
});


router.put('/burgers/update', function(req,res){
    burger.update(req.body.burger_id, function(result){
        //wrapper for orm.js that using MySQL update callback will return a log to console, render back to index with handle
        console.log(result);
        res.redirect('/');
    });
});












module.exports = router;




*/
