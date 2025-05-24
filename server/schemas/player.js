const mongoose = require('mongoose');
const schema = mongoose.Schema;
const playerSchema = new schema(
    {
        nickname: String,
        posX: Number,
        posY: Number,
    }
);
module.exports = mongoose.model('Player', playerSchema);