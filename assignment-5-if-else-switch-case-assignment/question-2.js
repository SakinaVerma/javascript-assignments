let firstNumber = 25;
let secondNumber = 78;
let thirdNumber = 87;
let forthNumber = 97;

if (firstNumber > secondNumber && firstNumber > thirdNumber && firstNumber>forthNumber) {

    console.log("Greatest Number is :" + firstNumber);
}
    else if(secondNumber > thirdNumber && secondNumber > forthNumber && thirdNumber>firstNumber)
     {
    console.log("Greatest Number is :" + secondNumber);
      }
    else if (thirdNumber>forthNumber && thirdNumber>secondNumber && thirdNumber>firstNumber){
    console.log("Greatest Number is :" + thirdNumber);   
      }
      
else {
    console.log("Greatest Number is :" + forthNumber);

}
