var Names = prompt("Enter your name");
var EcoMarks = +prompt("Enter Economics Marks");
var StatsMarks = +prompt("Enter Statistics Marks");
var AccMarks = +prompt("Enter Accounting Marks");
var EngMarks = +prompt("Enter English Marks");
var totalmarks = 400;
var studentmarks = EcoMarks + StatsMarks + AccMarks + EngMarks;
var percentage = studentmarks / totalmarks *100;
console.log(" Hi " + Names + " your total gain marks is " + studentmarks + " out of " + totalmarks + " and your percentage is" + percentage);