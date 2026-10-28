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

let marks =92;
 let bonus =5;

marks += bonus;


if(marks >= 90 && marks <= 100)
{
console.log("Grade A");
}
if(marks > 90 && bonus > 0)
{
console.log("Excellent");
    }

else if (marks >= 80 && marks < 90)
{
console.log ("Grade B");
}
else if (marks >=60 && marks < 70)
{
console.log("grade c");
}
else if (marks >=50 && marks < 60)
{
console.log("grade D");
}
else if (marks >=0 && marks < 50)
{
console.log("grade E");
}

else 
{
console.log("invalid marks!");
}

let result = 45;
result >=50 ? "Pass" : "Fail"

let Grade ="A";

switch  (Grade)
{
case "A":
console.log("Excellent")
break;
case "B":
console.log("GOOD")
break;
case "C":
console.log("Average")
break;
case "F":
console.log("Need improvement")
break;
default:
console.log("Absent!") 
break;
}