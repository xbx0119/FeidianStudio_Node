var mongoose = require('mongoose');
var Schemas = require('./schemas');
var System = mongoose.model('Systems', Schemas.systemSchema);





module.exports = System;