var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        email : String,
        password : String,
        token : String,
    });

var UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;