const express = require('express');
const router = express.Router();
const { getRelatorioViagens } = require('../controllers/relatorioController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.get('/viagens', getRelatorioViagens);

module.exports = router;
