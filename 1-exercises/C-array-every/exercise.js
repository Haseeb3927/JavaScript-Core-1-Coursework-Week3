/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

// function studentsInGroup(array1, array2) {
//   return group.every((word) => students.includes(word));
// }

//var groupIsOnlyStudents = group.every(studentsInGroup); // complete this statement
var groupIsOnlyStudents = group.every((person) => students.includes(person));

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
