// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//Declaring a function and then using it as a call back function

function multiply(num) {
  return num * 100;
}

//Now we'll use this function name `multiply` as a call back function in our .map() method but we do not have to worry about it's parameter (num)
//when calling it using .mao()

var multiplied1 = numbers.map(multiply);
console.log(multiplied1);

//We can write the same function named "multiply" inside the  .map() method if we do not want to call that function anywhere else.

var multiplied2 = numbers.map(function multiply(num) {
  return num * 100;
});
console.log(multiplied2);

//we can make this code shorter by removing function name "multiply" and it will still work
//Because we are not using function anywhere else, we do not need name

var multiplied3 = numbers.map(function (num) {
  return num * 100;
});
console.log(multiplied3);

//We can make this code even shorter.
//In the latest versions of JavaScript a way of declaring functions was introduced called _arrow functions_ =>.
//For this we will remove the word function and our code will still work.

var multiplied4 = numbers.map((num) => {
  return num * 100;
});
console.log(multiplied4);

//There is one last thing we can do to make our code shorter.
//If we remove the braces (`{}`) from an arrow function, the body of the function will be returned without needing to write the `return` keyword.

var multiplied5 = numbers.map((num) => num * 100);
console.log(multiplied5);
