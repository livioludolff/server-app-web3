'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var portSchema = new Schema({
   _id: {
      type: Number
   },
   nome: {
      type: String
   },
   indice: {
      type: String
   }
});
module.exports = mongoose.model('portfolios', portSchema);