const mongoose = require('mongoose');

const objSchema = new mongoose.Schema({
    id:{
        type:Number,
        require:true
    },
    tuition: {
        type: Number,
        require: true
    },
    nameObject: {
        type: String,
        require: true
    },
    date:{
        type : String,
        require: true 
    }, 
    numSerial:{
        type: Number,
        require : true
    },
    cantidad:{
        type: Number,
        require: true
    }
});

const Loan =  mongoose.model('Loan', objSchema);

module.exports = {
    Loan
};