// // require modules for the User Model
// let mongoose = require('mongoose');
// //let passportLocalMongoose = require('passport-local-mongoose');

const mongoose = require('mongoose')

//Schema aus mongoose holen (class constructor function, also mayúsculas!)
const Schema = mongoose.Schema
let UserSchema = new Schema
(
{
     email: 
     {
          type: String,
          default: '',
          trim: true,
          required: 'username is required'
     },
     
        password: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'password is required'
        },
    
     
},
// {
//      collection: "users"
// }
);

// configure options for User Model

// let options = ({ missingPasswordError: 'Wrong / Missing Password'});
// User.plugin(passportLocalMongoose, options);
const User = mongoose.model('User', UserSchema)
module.exports = User