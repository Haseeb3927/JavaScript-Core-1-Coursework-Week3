/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let string1 = statement.substring(0, 4); // removes "I DO"
let string2 = statement.substring(8, statement.length); //removes "LIKE PROGRAMMING"
let result = string1.concat(string2);

console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
