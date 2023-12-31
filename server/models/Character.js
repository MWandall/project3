const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
  name: {
    type: String,
  },
  //*image string is the href link path
  image: {
    type: String,
  },
//   level: {
//     type: Number,
//   },
  health: {
    type: Number,
  },
  attack: {
    type: Number,
  }
//   ,
//   defense: {
//     type: Number,
//   },
});


const Character = model('Character', characterSchema);

module.exports = Character;
