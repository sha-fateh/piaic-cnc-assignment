var sub1 = parseInt(prompt("Type in your marks in the first subject: "));
var sub2 = parseInt(prompt("Type in your marks in the second subject: "));
var sub3 = parseInt(prompt("Type in your marks in the third subject: "));
var sub4 = parseInt(prompt("Type in your marks in the fourth subject: "));
var sub5 = parseInt(prompt("Type in your marks in the fifth subject: "));
var marksObtained = sub1+sub2+sub3+sub4+sub5;
var total = 500;

var percentage = marksObtained*100/total;

alert("Your total percentage is: "+percentage+" % ");
