const expect = require('expect');

describe('app',()=>{
    it('should call spy correctly',()=>{
        var spy = expect.createSpy();
        spy("andrew", 25);
        expect(spy).toHaveBeenCalledWith("andrew", 25);
    })

});