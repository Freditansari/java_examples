const db = require('./db');
module.exports.handleSignUp =(email, password)=>{
    //check email already exist
    //save user to database
    db.saveUser({email, password});
    //send the welcome email
};