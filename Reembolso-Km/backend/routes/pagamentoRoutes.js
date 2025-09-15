const express = require('express');
const router = express.Router();
const { getViagensAPagar, criarPagamento } = require('../controllers/pagamentoController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.get('/apagar', getViagensAPagar);
router.post('/', criarPagamento);

module.exports = router;