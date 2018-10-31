module.exports.add =(a,b)=> a+b;

module.exports.addAsync =(a,b, callback)=>{
    setTimeout(() => {
        callback(a+b);
    }, 100);
    

};

module.exports.square = (x)=> x*x; 

module.exports.setname= (user, fullName)=>{
    var names= fullName.split(' ');
    user.firstname =names[0];
    user.lastname = names[1];

    return user;

}