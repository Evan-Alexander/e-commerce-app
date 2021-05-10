const mongoose = require('mongoose');
const validator = require('validator');

const siteSchema = mongoose.Schema({
    address:{
        required:true,
        type:String,
        trim: true,
    },
    hours:{
        required:true,
        type:String,
        trim: true,
    },
    phone:{
        required:true,
        type:String,
        trim: true,
    },
    email:{
      type:String,
      required:true,
      unique: true,
      trim:true,
      validate(value){
          if(!validator.isEmail(value)){
              throw new Error('Invalid email')
          }
      }
  },
});


const Site = mongoose.model('Site',siteSchema);
module.exports = { Site }