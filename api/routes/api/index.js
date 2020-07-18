const express = require('express');
const router = express.Router();

const appointmentController = require('../../controllers/appointments');
const slotController = require('../../controllers/slot');

router.get('/appointments', appointmentController.all);
router.get('/retrieveSlots', slotController.all);
router.post('/appointmentCreate', appointmentController.create);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express App running' });
});



module.exports = router;
