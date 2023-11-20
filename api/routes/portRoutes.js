'use strict';
module.exports = function(app) {
var portfolios = require('../controllers/portController');

// Rota para listar todos os portfolios ou buscar por nome/tipo
app.route('/portfolios')
.get(portfolios.list_all_portfolios);

// Nova rota para buscar portfolios por nome/tipo
app.route('/portfolios/:nomeFiltro')
.get(portfolios.get_portfolio_by_name);
};