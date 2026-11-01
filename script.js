//let a=6;
// let b=0;

// let operator="/";

//  if(operator ==="+")
// {
//     console.log(a+b);
// }
// else if (operator==="-")
// {
//     console.log(a-b);
// }
// else if (operator ==="*")
// {
//     console.log(a*b);

// }
// else if(operator ==="/")
// {if(b===0)
// {console.log(" b cannot be zero");}
// else
// {console.log(a/b);}
// } // nested if 

// else
// {
//     console.log("Invalid operator");
// }

let marks =85;
let bonus =5;

marks += bonus;

let grade;

if(marks >= 90 && marks <= 100)
{
grade = "A";
}
else if (marks >= 70 && marks < 89)
{
grade = "B";
}
else if (marks >=50 && marks < 69)
{
grade = "C";
}
else if (marks >=0 && marks < 50)
{
grade = "F";
}

else 
{
console.log("invalid marks!");
}

let result = marks >=50 && marks <=100? "Pass" : "Fail"





let remarks;

switch(grade)
{
case "A":
remark = "Excellent"
break;
case "B":
remark = "Good"
break;
case "C":
remark = "Average"
break;
case "F":
remark = "Need improvement"
break;

default:
remark = "Invalid grade!" 
break;
}

console.log("Marks:", marks);
console.log("Grade:", grade);
console.log("Result:", result);
console.log("Remark:", remark);
