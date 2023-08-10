// | IF…ELSE	&	ELSE	IF	STATEMENTS | TESTING	SET OF	CONDITIONS |
// |	SWITCH	STATEMENTS	|


// 1. Write a program to check whether the given input number is 
// divisible by 3 or else show a message “Number is not divisible 
// by 3”.

// var userInput = prompt("type number");


// if(userInput % 3 === 0 ){
// console.log("it is divisible by 3");
// }
// else{
//     console.log("not divisible by 3")
// };


// 2. Write a program that checks whether the given input is an even 
// number or an odd number.

// var userInput = prompt("type number");
// var msgPara = document.querySelector("p");


// if(userInput % 2 === 0 ){
// msgPara.innerHTML = "it is even number"
// }
// else{
//     msgPara.innerHTML ="its not even number"
// };


// 3. Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough", 
// otherwise output "Too young".

// var age = prompt("type your age");
// var msgPara = document.querySelector("p");


// if(age > 18){
// msgPara.innerHTML = "too old"
// }
// else{
//     msgPara.innerHTML = "too young"
// }


// 4. Write a program that prompts the user for their name, and then 
// displays a special greeting to that person if their name is the 
// same as yours. If the name entered by the user is anything 
// other than your name, your code should not produce any 
// output.

// var mathName = prompt("write name to confirm");
// var myName = "majid hussain";
// var msgPara = document.querySelector("p");

// if(mathName === myName){
//     msgPara.innerHTML = "congrats"
// }


// 7. Write a program to create a calculator for +, -, *, /, % using 
// switch case statements. (number1, number2 and operator will 
// be input)

// var firstNum = +prompt("type one number");
// var secondNum = +prompt("type second number");
// var operator = prompt("type operater to calculate");

// var msgPara = document.querySelector("p");
  
// if(operator === "+"){
//     msgPara.innerHTML = firstNum + secondNum;
// }
// else if(operator === "-"){
//     msgPara.innerHTML = firstNum - secondNum;
// }
// else if(operator === "x" || "*"){
//     msgPara.innerHTML = firstNum * secondNum;
// }
// else if(operator === "/"){
//     msgPara.innerHTML = firstNum / secondNum;
// }
// else{
//     msgPara.innerHTML = "please type correct method"
// };


// 8. Write a program that takes time as input from user in 24 hours 
// clock format like: 1900 = 7pm. Implement the following case 
// using if, else & else if statements

// var time = prompt("type time here in 24 hour format");

// if(time >= 0000 && time < 1200 ){
//     document.write("Good morning");
// }
// else if(time >= 1200 && time < 1700){
//     document.write("Good afternoon")
// }
// else if(time >= 1700 && time < 2100){
//     document.write("Good Evening")
// }
// else if(time >= 2100 && time <= 2359){
//     document.write("Good Night")
// };



// 10. Write a program that 
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give 
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, 
// show message “Correct! The password you entered 
// matches the original password”. Show “Incorrect 
// password” otherwise.

// var password = '12345'
// var emptyPassword = " "
// var passwordInput = prompt("plz enter password");

// if(password === passwordInput){
//     alert("you are log in")
// }
// else if (passwordInput !== password ){
//     alert("plz enter the password")
// }
// else{
//     alert("password is wrong")
// };



// 12. This if/else statement does not work. Try to fix it:
//  var greeting;
//  var hour = 13;
//  if (hour < 18) {
//  greeting = "Good day";
//  else
//  greeting = "Good evening";
//  } 

// var greeting;
//  var hour = 13;

//  if (hour < 18) {
//  greeting = "Good day";
//  }
//  else{
//  greeting = "Good evening";
//  } 

//  document.write(greeting)
