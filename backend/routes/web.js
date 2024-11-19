const express = require('express')
const TenderController = require('../controllers/tendercontroller')

const route = express.Router()


// tender
route.post('/Tender_insert', TenderController.Tender_insert)
route.get('/getTenders', TenderController.getTenders)
route.get('/ViewTender/:id', TenderController.ViewTender)
route.post('/UpdateTender/:id', TenderController.UpdateTender)
route.get('/deleteTender/:id', TenderController.deleteTender)


module.exports = route;