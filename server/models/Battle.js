// not sure if this model is needed, need to decide how we would use this if/ if it should exist
// my initial thought is that this is where we could store data about the npcs that the player is battling against,
//  but that could maybe just be included in the monster model, I think it depends if there will be any differences between what the player can do and what the npc does.
const { Schema, model } = require('mongoose');

const battleSchema = new Schema(
  {
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Monster',
      },
    ],
    // for the participants, this is something that might actually be useful since we want to have the monster take on a series of npcs in order to "win" the 
    outcome: {
      type: String,
      enum: ['Win', 'Loss'],
      required: true,
    },
    rewards: {
      type: Number,
      default: 0,
    },
    // Additional fields specific to Battle model
    // You can add more fields as needed for game mechanics
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Battle = model('Battle', battleSchema);

module.exports = Battle;
