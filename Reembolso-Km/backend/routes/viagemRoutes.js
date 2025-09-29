const express = require('express');
const router = express.Router();
const { createOrUpdateViagem, getMinhasViagens, getMinhasViagensRascunho, deleteViagem } = require('../controllers/viagemController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.route('/')
    .post(createOrUpdateViagem) 
    .get(getMinhasViagens);

router.get('/rascunho', getMinhasViagensRascunho);


router.route('/:id')
    .put(createOrUpdateViagem)
    .delete(deleteViagem);

module.exports = router;