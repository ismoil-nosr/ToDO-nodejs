const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = new Schema ({
    content: {
        required: [true, 'Please, give to the todo a context'], 
        type: String,
        minlength: [2, 'Min length is 2'],
        maxlength: [50, 'Max length is 50']
    },
});

module.exports = mongoose.model('Task', TaskSchema);