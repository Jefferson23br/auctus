const path = require('path');
const express = require('express');
const multer = require('multer');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();


const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename(req, file, cb) {
        cb(null, `comprovante-${req.user.id}-${Date.now()}${path.extname(file.originalname)}`);
    }
});


function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png|pdf/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb('Apenas imagens (jpg, jpeg, png) e PDFs são permitidos!');
    }
}

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
});


router.post('/', protect, upload.single('comprovante'), (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'Por favor, anexe um arquivo.' });
    }

    res.status(201).send({
        message: 'Arquivo enviado com sucesso!',
        filePath: `/${req.file.path}` 
    });
});

module.exports = router;