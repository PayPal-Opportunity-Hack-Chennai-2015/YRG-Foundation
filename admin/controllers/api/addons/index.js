'use strict';

var AddonsModel = require('../../../models').Addons;

module.exports = function(router) {
    router.get('/', function(req, res) {
        AddonsModel.find(function(err, data) {
            res.send(err ? {
                'error': 'API Error',
                'message': 'Error occurred'
            } : data);
        });
    });

    router.post('/', function(req, res){
        if ( !(req.body.id && req.body.name && req.body.price) )
            return res.status(400).send({'message' : 'Invalid request format'});

        var addon = new AddonsModel({
            'id' : Number(req.body.id),
            'name' : req.body.name,
            'price' : Number(req.body.price)
        });

        addon.save(function(err){
            if(err)
                res.status(500).send({'message':'DB insertion error'});
            else
                res.status(200).send({'message':'Success'});
        });
    });
};
