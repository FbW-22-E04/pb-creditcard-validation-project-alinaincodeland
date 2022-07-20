function validateCreditCard(creditCardNum){

    //remove dashes 
        var noDashes = '';
        for (var i = 0; i < creditCardNum.length; i++) {
            if (creditCardNum[i] !== '-') {
                noDashes += creditCardNum[i];
            }
        }

   // Number must be 16 digits
    if(creditCardNum.length !== 16){
      return "false, wrong length";
    }

    // all of them must be numbers
    for(var i = 0; i < creditCardNum.length; i++){

      // You must have at least two different digits represented (all of the digits cannot be the same)
      var num = creditCardNum[i];
  
      num = Number.parseInt(num);
  
      if(!Number.isInteger(num)){
        return "false, not all are numbers";
      }
    }
  
    // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
    var dig = {};
    for(var i = 0; i < creditCardNum.length; i++){
      dig[creditCardNum[i]] = true;
    }
    if(Object.keys(dig).length < 2){
      return "false, less than 2 different digits" ;
    }
  
    // The final digit must be even
    if(creditCardNum[creditCardNum.length - 1] % 2 !== 0){
      return "false, the final digit is odd";
    }
  
    // The sum of all the digits must be greater than 16
    var sum = 0;
    for(var i = 0; i < creditCardNum.length; i++){
      sum += Number(creditCardNum[i]);
    }
    if(sum <= 16){
      return "false, the sum is not greater than 16";
    }
  
    return true;
  };
  
  /**** tests *****/
  console.log(validateCreditCard('9999777788880000')); 
  console.log(validateCreditCard('6666666666661666')); 
  console.log(validateCreditCard('a92332119c011112')); 
  console.log(validateCreditCard('4444444444444444')); 
  console.log(validateCreditCard('1211111111111112'));

/**** tests *****/
console.log(validateCreditCard('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
console.log(validateCreditCard('6666-6666-6666-1666')); //{ valid: true, number: '6666-6666-6666-1666' }
console.log(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
console.log(validateCreditCard('4444-4444-4444-4444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
console.log(validateCreditCard('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }





