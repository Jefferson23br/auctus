const express = require('express');
const router = express.Router();
// Importa todas as funções do controller
const authController = require('../controllers/authController');

// Rotas existentes
router.post('/register', authController.register);
router.post('/login', authController.login);

// --- NOVAS ROTAS PARA RECUPERAÇÃO DE SENHA ---
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password/:token', authController.resetPassword);

module.exports = router;