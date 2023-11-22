'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var portSchema = new Schema({
   _id: {
      type: Number
   },
   nomePortfolio: {
      type: String
   },
   nomeFiltro: {
      type: String
   },
   indice: {
      type: String
   },
   rentabilidade12Meses: {
      type: Number
   },
   rentabilidade60Meses: {
      type: Number
   },
   valorInicial: {
      type: Number
   },
   descricao: {
      type: String
   },
   grafico: {
      type: String
   },
   composicao: [
      {
        titulo: {
          type: String
        },
        dataVencimento: {
          type: String
        },
        codIdsin: {
          type: String
        },
        peso: {
          type: Number
        },
        adress: {
          type: String
        }
      }
    ]
});
module.exports = mongoose.model('portfolios', portSchema);