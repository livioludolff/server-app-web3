'use strict';
var mongoose = require('mongoose'),
Portfolio = mongoose.model('Portfolios');
exports.list_all_portfolios = async (req, res) => {
    try {
        const portResultado = await Portfolio.find();
        res.status(200).json(portResultado)
    } catch (err) {
        res.status(500).json(err);
    }
};