'use strict';

var InstitutionModel = require('../../../models').Institutions,
    shortid = require('shortid');

module.exports = function(router) {
    router.get('/', function(req, res) {
        InstitutionModel.find(function(err, data) {
            res.json(err ? {
                'error': 'API Error',
                'message': 'Error occurred'
            } : data);
        });
    });

    router.post('/', function(req, res) {
        var response = {};
        if (typeof req.body.name === 'undefined' || req.body.name === '') {
            response = {
                'error': 'Incorrect params',
                'message': 'Name cannot be empty'
            };
        }
        if (typeof req.body.address === 'undefined' || req.body.address === '') {
            response = {
                'error': 'Incorrect params',
                'message': 'Address cannot be empty'
            };
        }
        if (typeof req.body.capacity === 'undefined' || req.body.capacity === '') {
            response = {
                'error': 'Incorrect params',
                'message': 'Capacity cannot be empty'
            };
        }
        if (typeof req.body.category === 'undefined' || req.body.category === '') {
            response = {
                'error': 'Incorrect params',
                'message': 'Category cannot be empty'
            };
        }
        if (!Object.keys(response).length) {
            var model = {
                id: shortid.generate(),
                name: req.body.name,
                address: req.body.address,
                category: req.body.category.split(','),
                capacity: req.body.capacity
            };

            InstitutionModel(model).save(function(err, data) {
                res.json(err ? {
                    'error': 'API Error',
                    'message': 'Could not add institution'
                } : data);
            });
        } else {
            res.json(response);
        }
    });
};
