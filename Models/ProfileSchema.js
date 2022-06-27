const { model, Schema } = require('mongoose');



const ProfileSchema = new Schema({
  userID: { type: String, required: true },
  coins: { type: Number, default: 500, min: 0 },
  wood: { type: Number, default: 0 },
  stone: { type: Number, default: 0 },
  metal: { type: Number, default: 0 },
  rope: { type: Number, default: 0 },
  fishingRod: { type: Boolean },
  lumberjacks: { type: Number, default: 0 },
  miners: { type: Number, default: 0 }
});



module.exports = model("ProfileSchema", ProfileSchema)