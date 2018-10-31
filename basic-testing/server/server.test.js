const request = require('supertest');
const expect = require('expect');

var app= require('./server').app;
describe('check /',()=>{
    it('should return hello world', (done)=>{
        /**
         * basic hello world testing
         */
        describe('hello world checks',()=>{
            // request(app)
            // .get('/')
            // .expect(200)
            // .expect('hello world')
            // .end(done);
            request(app)
            .get('/')
            .expect(404)
            .expect((res)=>{
                expect(res.body).toInclude({
                    error:'page not found'
                });
            })
            .end(done);
    
        });
       
      
    });
    
});

describe('tests for /users',()=>{
    it('should pass if contains jimmy', (done)=>{


        request(app)
            .get('/users')
            .expect(200)
            .expect((res)=>{
                expect(res.body).toInclude({
                    name: 'jimmy',
                    age:35
                });
            })
            .end(done);
    });
});

