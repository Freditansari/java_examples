var getUser = (id, callback)=>{
    var user={
        id: id,
        name:"sanjay"
    }
    callback(user);

    // setTimeout(() => {
    // //   callback(user);
    // //    return user;
    // }, 2000);
    
};

getUser(12, (user)=>{
    console.log(user);
});