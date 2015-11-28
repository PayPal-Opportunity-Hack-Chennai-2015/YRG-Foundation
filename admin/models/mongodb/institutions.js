'use strict';

var mongoose = require('mongoose');

var institutions = function() {
    var schema = mongoose.Schema({
        'id': String,
        'name': String,
        'address': String,
        'category': [String],
        'capacity': Number
    });
    return mongoose.model('institutions', schema);
};

module.exports = institutions();
