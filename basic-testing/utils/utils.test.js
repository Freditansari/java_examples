//library to shorten the test unit.
// we use expect library. go to expectjs
const expect = require('expect');

const utils = require('./utils');

it('should add two numbers ', ()=> {
    var res = utils.add(33, 11);


    expect(res).toBe(44);
    // if (res!=44){
    //     throw new Error(`expected 44 but got ${res}`);
    // }

  

});

//to test async call we should use done as provided below to check.
//it will also shows which test that takes long time to complete. 
//note: mocha will automatically fails if a test pass 2second mars
it('should async add two numbers ', (done)=> {
    var res = utils.addAsync(33, 11, (sum)=>{
        expect(sum).toBe(44);
        done();
    });

  

});

it('show square', ()=>{

    var square = utils.square(4);

    //compare numbers
    expect(square).toBe(16).toBeA('number');



    // if (square != 16){
    //     console.log(square);
    //     throw new Error(`expected 16 but got ${square}`);
    // }

});

it('equal objects',()=>{
    //compare objects. this is useful to test database setup by pulling shitload of data and compare it to the name. and check the time as well how much data to process
    expect({name: 'andrew'}).toEqual({name: 'andrew'});
});

it('include some object',()=>{
    expect([2,3,4,3]).toInclude(2);

    expect({name:'andrew', age:'23', location:'jakarta'}).toInclude({age:'23'});
});

it('it should return fredi tansari',()=>{
    var user = {location:'jakarta', age: 50};
    var result = utils.setname(user,"fredi tansari");


    expect(result).toInclude({firstname:'fredi', lastname:'tansari'});
});


