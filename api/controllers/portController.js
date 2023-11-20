'use strict';
var mongoose = require('mongoose'),
Portfolio = mongoose.model('portfolios');

// Funcao para listar todos os portfolios ou buscar por nome/tipo
exports.list_all_portfolios = async (req, res) => {
    try {
      if (req.params.nomeFiltro) {
        // Se um nomeFiltro foi fornecido, chama a funcao para buscar por nome
        return exports.get_portfolio_by_name(req, res);
      } else {
        // Caso contrário, lista todos os portfolios
        const portResultado = await Portfolio.find();
        res.status(200).json(portResultado);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
// Exemplo de logs no controlador
exports.get_portfolio_by_name = async (req, res) => {
    try {
      const nomeFiltro = req.params.nomeFiltro;
  
      const portResultado = await Portfolio.find({ nomeFiltro: nomeFiltro });
  
      if (portResultado.length > 0) {
        res.status(200).json(portResultado);
      } else {
        res.status(404).json({ message: 'Nenhum portfolio encontrado para o nome/tipo especificado.' });
      }
    } catch (err) {
      console.error('Erro na busca por nome:', err);
      res.status(500).json(err);
    }
  };