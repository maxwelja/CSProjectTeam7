const express = require('express')
const router = express.Router()
const {createEvent, readEvent, readAll, updateEvent, deleteEvent} = require('../controllers/eventManager')

// CRUD operations for events
router.post('/', createEvent)
router.get('/:id', readEvent)
router.get('/', readAll)
router.patch('/:id', updateEvent)
router.delete('/:id', deleteEvent)

module.exports = router