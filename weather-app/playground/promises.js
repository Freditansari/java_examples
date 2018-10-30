var asyncAdd =(a,b) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (typeof a === "number" && typeof b === "number"){
                resolve (a+b);
            }else{
                reject('invalid arguments');
            }
        }, 500);      
    });
};

asyncAdd(500,'a').then(
    (result)=>{
        console.log(result);
        return asyncAdd(result , 56);
    },
     (errorMessage)=>{
         console.log(errorMessage);
        }).then((result)=> {
                console.log('this is from second promise: '+result);
        }, (errorMessage)=>{
                console.log('this is error from second promise: '+ errorMessage);
        }) ;


// var promises = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve('hey it worked');
//         reject('unable to fulfill promises');
//     }, 2500);
// });

// promises.then((message)=> {
//     console.log('success: '+ message)
// }, (errorMessage)=> {
//     console.log('error: '+errorMessage)
// });