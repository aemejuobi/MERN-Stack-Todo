const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoCollection = new Schema({
    item: {
        type: String
    }
});

const Todo = mongoose.model("Todo", TodoCollection);
module.exports = Todo;