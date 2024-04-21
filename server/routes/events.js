const express = require('express');
const router = express.Router();
const {createEvent, readEvent, readAll, updateEvent, deleteEvent} = require('../controllers/eventManager');

// CRUD operations for events
router.get('/all', (req, res) => {
    res.json({mssg:"Get all events"});
})
router.post('/tmp', async (req,res) =>{
    const {title, organization, location} = req.body;

    // try to create a new event
    try {
        const event = await Event.create({title, organization, location});
        res.status(200).json(event);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    res.json({msg: 'Post an event'});
})
router.post('/', createEvent);
router.get('/:id', readEvent);
router.get('/', readAll);
router.patch('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;