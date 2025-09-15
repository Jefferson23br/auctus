const express = require('express');
const router = express.Router();
const { createViagem, getMinhasViagens } = require('../controllers/viagemController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.route('/')
    .post(createViagem)
    .get(getMinhasViagens);

module.exports = router;