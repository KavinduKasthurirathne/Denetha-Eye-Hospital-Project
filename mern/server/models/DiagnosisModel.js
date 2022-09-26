const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const diagnosisSchema = new Schema({
    pname: {type : String,
        required : true
    },
    ward: {type : String,
        required : true
    },
    Regno: {type : Number,
        required : true
    },
    age: {type : Number,
        required : true
    },
    DAddmission: {type : Date,
        required : true
    },
    Ddischarge: {type : Date,
       
    },
    Dsurgery: {type : Date,
       required:true
    },
    PHACO: {type : String,
        required:true
     },
    IOL: {type : String,
        required:true
    },
    variable: {type : String,
        
    }



})
const Diagnosis = mongoose.model("DiagnosisCard",diagnosisSchema);

module.exports = Diagnosis;