const utils = require('./utils').events;
const Event = require('../database/models/event.model');

async function createEvent(req) {
    const event = new Event({

        event_name: req.body.event_name,
        event_date: Date.parse(req.body.event_date),
        private: req.body.private,
        admin: req.session.id,
        user_ids: [],
    });
    await event.save();
    return event.toJSON();
}
async function getEvent(req, name) {
    

}

module.exports = {
    createEvent
}