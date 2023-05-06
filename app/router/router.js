const express = require('express');

const mainController = require('../controller/mainController');



const router = express.Router();

router.get('/', mainController.renderHomePage);
router.get('/project', mainController.renderProjectPage);


module.exports = router;
