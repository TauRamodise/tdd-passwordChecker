  /*  CODE EXPLANATION
  
  1. ^ - matches any string containing certain characters
  2. (?=.*[a-z]) - must have lowercase
  3. (?=.*[A-Z]) - must have UPPERcase
  4. (?=.*[0-9]) - must have numbers
  5. (?=.{8,})   - must have 8 or more numbers
  
  */
 
  function password_is_valid(password){
     
   let validPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{9,}$)/
   let result = validPass.test(password) 
  
   try {
     if(result == false) throw('password must contain uppercase and lowercase letters and at least one number');
     
   } catch (error) {
     console.log('Please note ' + error);
  
   }
  
   return result;
  }
  

function password_is_ok(password) {
  
  let exp1 = /^[A-Za-z0-9]{9,}$/;
  let exp2 = /^(?=.*[A-Z])[A-Z]+/;
  let exp3 = /^(?=.*[a-z])[a-z]+/;
  let exp4 = /^(?=.*[0-9])[0-9]+/;

  if (exp1.test(password) === true && exp2.test(password) === true) {
    return 'password is valid';
  } else
  if (exp1.test(password) === true && exp3.test(password) === true) {
    return 'password is valid';
  } else
  if (exp1.test(password) === true && exp4.test(password) === true) {
    return 'password is valid'
  } else{
    return 'password is invalid'
  }
}
