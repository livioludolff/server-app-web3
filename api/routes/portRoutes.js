'use strict';
module.exports = function(app) {
var portfolios = require('../controllers/portController');
// portfolios Routes
app.route('/portfolios')
   .get(portfolios.list_all_portfolios);
};