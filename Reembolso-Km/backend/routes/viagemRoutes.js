const express = require('express');
const router = express.Router();
const { createOrUpdateViagem, getMinhasViagens, getMinhasViagensRascunho } = require('../controllers/viagemController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.route('/')
    .post(createOrUpdateViagem) 
    .get(getMinhasViagens);


router.get('/rascunho', getMinhasViagensRascunho);


router.put('/:id', createOrUpdateViagem);

module.exports = router;