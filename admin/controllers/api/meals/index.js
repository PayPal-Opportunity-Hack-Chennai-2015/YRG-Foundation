'use strict';

var MealsModel = require('../../../models').Meals;

module.exports = function(router) {
    router.get('/', function(req, res) {
        MealsModel.find(function(err, data) {
            res.send(err ? {
                'error': 'API Error',
                'message': 'Error occurred'
            } : data);
        });
    });

    router.post('/', function(req, res){
        if ( !(req.body.id && req.body.name && req.body.price && req.body.contents) )
            return res.status(400).send({'message' : 'Invalid request format'});

        var meal = new MealsModel({
            'id' : Number(req.body.id),
            'name' : req.body.name,
            'price' : Number(req.body.price),
            'contents' : req.body.contents
        });

        meal.save(function(err){
            if(err)
                res.status(500).send({'message':'DB insertion error'});
            else
                res.status(200).send({'message':'Success'});
        });
    });
};
