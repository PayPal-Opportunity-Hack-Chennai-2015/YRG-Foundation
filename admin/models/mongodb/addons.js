'use strict';

var mongoose = require('mongoose');

var addons = function() {
    var schema = mongoose.Schema({
        'id': String,
        'name': String,
        'price': Number
    });
    return mongoose.model('addons', schema);
};

module.exports = addons();
