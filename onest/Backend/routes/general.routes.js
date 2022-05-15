const express = require('express');
const router = express.Router();
// const uenJoi = require('../middleware/uen.joi');


router.use('/', (req, res, next) => {
    console.log('This is a general route.');
    next();
})