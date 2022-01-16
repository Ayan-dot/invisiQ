const mongoose = require("mongoose");
const User = require('./user.model');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  event_name: { type: String, required: true },
  event_time: { type: Date },
  private: {type: Boolean, default: false},
  admin: { type: mongoose.Types.ObjectId, required: true, ref:'User'},
  user_ids: [mongoose.Types.ObjectId],
  socket_game_id: [mongoose.Types.ObjectId]

});

eventSchema.pre('validate', async function(next) {
  this.admin = mongoose.Types.ObjectId(this.admin);
});

module.exports = Event = mongoose.model("Event", eventSchema);
