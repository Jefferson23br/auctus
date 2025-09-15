const express = require('express');
const router = express.Router();
const { createDespesa, getMinhasDespesas, updateDespesa, deleteDespesa } = require('../controllers/despesaController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.route('/')
    .get(getMinhasDespesas)
    .post(createDespesa);

router.route('/:id')
    .put(updateDespesa)
    .delete(deleteDespesa);

module.exports = router;