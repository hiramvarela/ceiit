const mongoose = require('mongoose');

const objSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    numserial: {
        type: Number,
        require: true
    },
    ubicacion:{
        type : String,
        require: true 
    }, 
    descripcion:{
        type: String,
    },
    cantidad:{
        type: Number,
        require: true
    },
    status:{
        type:Boolean,
        require:true
    },
    qr:{
        type:String,
        require:true
    }
});

const Object =  mongoose.model('Object', objSchema);

module.exports = {
    Object
};