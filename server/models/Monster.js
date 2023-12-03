// implement the Monster model and decide what parameters we want and if we want any default values or validation added.
// TODOs think about any other parameters we might want and whether or not we need default values

const { Schema, model } = require('mongoose');

const monsterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // type: {
    //   type: String,
    //   required: true,
    // },  
    // For this "type" param, I think this will only be necessary if we want to have a few different varieties of monsters to choose from,
    //  this would let us change the default stats that a certain type which might be advantageous to give the player the feeling of choice 
    level: {
      type: Number,
      default: 1,
    },
    health: {
      type: Number,
    //   default: 100,
    },
    attack: {
      type: Number,
    //   default: 10,
    },
    defense: {
      type: Number,
    //   default: 5,
    },
    // Additional fields specific to Monster Battle Game
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    // Add more fields as needed for game mechanics
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Custom method or virtuals for game-related logic can be added here

const Monster = model('Monster', monsterSchema);

module.exports = Monster;
