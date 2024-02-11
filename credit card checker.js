/*
Name: Abuchi Robert
Path: Web3

*/
//This Program evaluates credit card numbers and output the brand (Visa or MasterCard)




function visaCard(cardNo){
  const pattern = /^4\d{12}(?:\d{3})?$/.test(cardNo); //the regex is explained below
 
  if(pattern === true){
    console.log(`This Card ${cardNo} is a valid Visa Card`);
    
  }else{
    console.log(`This Card ${cardNo} is NOT a Valid Visa Card `);
  }
}

/*
for a Visacard, it must start with 4
it is either 13 digit or 16 digit long

REGEX EXPLANATION 
the ^4 indicate that the pattern must start with a 4
\d{12} indicate that 12 digits in any order will follow suit
(?:\d{3}?) indicate that it is optional for this to be included, and inside it, only 3 digits are required if it is included.
$ indicate the end of the pattern

*/

function masterCard(cardNo){
  const pattern = /^5[1-5]\d{14}$/.test(cardNo);
  if(pattern === true){
    console.log(`This Card ${cardNo} is a Valid MasterCard`);
  } else{
    console.log(`This Card ${cardNo} is not a Valid MasterCard`);
  }
  
}

/*
The Mastercard credit card has 16 digits, starts with 5, the next number is a digit between 1 to 5 and the remaining digits that make up the card can be made up of any digit.

^5 indicate that the pattern must start with 5.
[1-5] indicate that any digit between 1 to 5 will be added
\d{14} indicate that 14 digits will be added to complete it.a


*/


newinput = prompt("Enter a Credit Card Number: ");

if(/^4/.test(newinput)){
  visaCard(newinput);
}else if(/^5/.test(newinput)){
  masterCard(newinput);
} else{
  console.log("You entered a wrong choice.")
}


//masterCard(newinput);