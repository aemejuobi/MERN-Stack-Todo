const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoCollection = new Schema({
    description: {
        type: String
    },
    responsible: {
        type: String
    },
    priority: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const Todo = mongoose.model("Todo", TodoCollection);
module.exports = Todo;