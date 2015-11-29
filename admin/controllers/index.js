'use strict';

var IndexModel = require('../models/index');
var request = require('request');

module.exports = function(router) {

	router.get('/index2.html', function(req, res){
		res.render('index2');
	});

    router.get('/', function(req, res) {
        var model = new IndexModel();
        res.render('index', model);
    });

	router.get('/', function(req, res){
        var url = 'http://localhost:8000/api/institutions';
            request(url, function(err, response, body){
                if(err){
                    res.render('admin',{institutions: []});    
                }
                else{
                    res.render('admin',{institutions: JSON.parse(body)});
                }
            })
        });

    router.get('/institutions', function(req, res){
        var url = 'http://localhost:8000/api/institutions';
            request(url, function(err, response, body){
                if(err)
                    res.render('admin',{institutions: []});    
                else
                    res.render('admin',{institutions: JSON.parse(body)});
            })
        });

    router.get('/donors', function(req, res){
        var url = 'http://localhost:8000/api/donors';
            request(url, function(err, response, body){
                if(err)
                    res.render('donor',{donors: []});    
                else
                    res.render('donor',{donors: JSON.parse(body)});
            });
        }); 

    router.get('/meals', function(req, res){
        var url = 'http://localhost:8000/api/meals';
        request(url, function(err, response, body){
            if(err)
                res.render('meals',{meals: [] });
            else
                res.render('meals',{meals: JSON.parse(body)});
        })
    });	

    router.get('/addons', function(req, res){
                var url = 'http://localhost:8000/api/addons';
                request(url, function(err, response, body){
                    if(err)
                        res.render('addons',{addons: [] });
                    else
                        res.render('addons',{addons: JSON.parse(body)});
                });
        });
};
