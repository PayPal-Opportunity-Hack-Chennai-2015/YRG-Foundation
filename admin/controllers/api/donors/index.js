'use strict';

var DonorModel = require('../../../models').Donor,
    shortid = require('shortid');

module.exports = function(router) {
    router.get('/', function(req, res) {
        DonorModel.find(function(err, data) {
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
        if (typeof req.body.email === 'undefined' || req.body.email === '') {
            response = {
                'error': 'Incorrect params',
                'message': 'Email cannot be empty'
            };
        }
        if (typeof req.body.phone === 'undefined' || req.body.phone === '') {
            response = {
                'error': 'Incorrect params',
                'message': 'Phone cannot be empty'
            };
        }
        if (!Object.keys(response).length) {
            var model = {
                id: shortid.generate(),
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            };

            DonorModel(model).save(function(err, data) {
                res.json(err ? {
                    'error': 'API Error',
                    'message': 'Could not add donor'
                } : data);
            });
        } else {
            res.json(response);
        }
    });
};
