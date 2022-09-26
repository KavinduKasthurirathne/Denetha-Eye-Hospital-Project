const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const surgerySchema = new Schema({
    pnumber: {type : Number,
        required : true
    },
    pname: {type : String,
        required : true
    },
    number: {type : Number,
        required : true
    },
    age: {type : Number,
        required : true
    },
    gender: {type : String,
        required : true
    },
    Stype: {type : String,
       
    }

})
const Surgery = mongoose.model("SurgeryDetail",surgerySchema);

module.exports = Surgery;



