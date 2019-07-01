
describe('password_is_valid()', function(){
    it('should check if password contains only lowercase', function(){
        let check = password_is_valid('HELLO');
        expect(check).toBe(false);
    })
    it('should check if password contains only uppercase', function(){
        let check = password_is_valid('hello');
        expect(check).toBe(false);
    })
    it('should check if password contains only  numbers ', function(){
        let check = password_is_valid('Hello012');
        expect(check).toBe(false);
    })
    it('should check if password longer than 9 numbers ', function(){
        let check = password_is_valid('Hello012');
        expect(check).toBe(false);
    })
    it('should check if password contains lowercase, uppercase, numbers and is longer than 8 letters', function(){
        let check = password_is_valid('Hello1012');
        expect(check).toBe(true);
    })
})

describe('password_is_ok()', function(){
    it('should check if password is greater than eight characters, password entered has at least one lowercase ', function(){
        let check = password_is_ok('HELLOOOOO');
        expect(check).toBe('password is valid');
    })
    it('should check if password is greater than eight characters, password entered has at least one uppercase', function(){
        let check = password_is_ok('helloooooo');
        expect(check).toBe('password is valid');
    })
    it('should check if password is greater than eight characters, password entered has one number', function(){
        let check = password_is_ok('Hello0121');
        expect(check).toBe('password is valid');
    })
    it('should check if password is greater than eight characters', function(){
        let check = password_is_ok('Hello0128');
        expect(check).toBe('password is valid');
    })
    it('should check if password is greater than eight characters and contains at least one upper and lower case letter and a number', function(){
        let check = password_is_ok('Hello1012');
        expect(check).toBe('password is valid');
    })
})
