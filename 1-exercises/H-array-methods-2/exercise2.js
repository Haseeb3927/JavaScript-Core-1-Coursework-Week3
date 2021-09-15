/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  return str
    .toLowerCase() // First we lowerCase the whole string
    .split(" ") //"creates" "substrings" "of" "each" "word" "in" "string"
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1)) //maps through the string making first character of  substring Capital and joining back rest of teh substring from string.length(1) leaving the first character
    .join(" "); // Joins the first word with rest of the substring and makes one string with first letter capital of each word.
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
