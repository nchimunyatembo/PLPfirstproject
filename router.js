const express = require('express')
const insertpatient = require('../controllers/post')
const router = express.router();

//patient registration
router.post('/register',insertpatient);

//search patient
router.get('/patients',searchpatient);
Module.exports = router;