/* 
  You are given a sentence contains a story.

  Current it says 

  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day."

  Change the story using .replace() so that it says 

  "I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night."
*/

let story =
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day.";

//First we create an object of words we want to replace with new words.
var replacementsObj = {
  dogs: "cats",
  10: 100000,
  great: "brilliant",
  day: "night",
};
// Then we used .replace() method which check for our words we want to replace globally and in each line "/ /gi"
// we created a function for the words the are going to replace the words i.e
// "\b" we added A word boundary to prevent a partial match of the words we are willing to replace
// function(parameter){return  ObjectsArray[parameter]}

let result = story.replace(/\b(dogs|10|great|day)\b/gi, function (word) {
  return replacementsObj[word];
});

//We can use arrow functions as well

// let result = story.replace(
//   /\b(dogs|10|great|day)\b/gi,
//   (word) => replacementsObj[word]
// );

/* EXPECTED OUTPUT */

const util = require("util");

function test(test_name, actual, expected) {
  console.log("");
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: \nexpected: ${util.inspect(
      expected
    )} \nbut your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "1. Original story has not been changed",
  story,
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day."
);

test(
  "2. The result of the replace is correct",
  result,
  "I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night."
);
