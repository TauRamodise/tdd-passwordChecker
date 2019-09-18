
describe('password_is_valid()', function(){
    it('should check if password contains lowercase, uppercase, numbers and is longer than 8 letters', function(){
        let check = password_is_valid('Hello1012');
        expect(check).toBe(true);
    })
    it('should throw an error when the incorrect password is entered', () => {
       let check = function(){
        throw('password must contain uppercase and lowercase letters and at least one number')
       }
       expect(check).toThrow('password must contain uppercase and lowercase letters and at least one number');
    })
})


describe('password_is_ok()', function(){
    it('should check if password is greater than eight characters, password entered has at least one lowercase ', function(){
        let check = password_is_ok('Helloooooo');
        expect(check).toBe('password is valid');
    })
    it('should check if password is greater than eight characters, password entered has at least one uppercase', function(){
        let check = password_is_ok('Helloooooo');
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
