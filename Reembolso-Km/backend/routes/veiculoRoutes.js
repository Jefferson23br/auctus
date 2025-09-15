const express = require('express');
const router = express.Router();
const { createVeiculo, getMeusVeiculos, finalizarAluguelVeiculo, updateVeiculo } = require('../controllers/veiculoController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, createVeiculo)
  .get(protect, getMeusVeiculos);

router.route('/:id')
  .put(protect, updateVeiculo); 

router.route('/:id/finalizar')
  .patch(protect, finalizarAluguelVeiculo);
  
module.exports = router;