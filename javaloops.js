// const check = num =>
// {
// if (num%2 ===0 )
// { return "Even number";
// }
// else 
// { return " oddnumber";
// }
// };
// console.log(check(4));
// console.log(check(7));
// console.log(check(0));


// function result(mark)
// {
// if (mark < 0 || mark >100)
// { return "invalid marks";
// }
// else if (mark >= 50)
// { return "Pass";
// }
// else 
// {return "Fail";
// }
// };
// console.log(result(75));
// console.log(result(40));
// console.log(result(120));

// const findmax =(a,b,c) =>

// {
// if (b>a && b>c)
// { 
// return b;
// }
// else if (c>a && c>b)
// {
//   return c;
// }
// else 
// { return a;

// }
// };

// console.log(findmax(10,25,15));
// console.log(findmax(5,3,8));
// console.log(findmax(9,9,2));

// const sumToN = n =>
// {

// let sum =0;
// for (i=0;i<=n;i++)
// sum =sum+i;

// return sum;
// };
// console.log(sumToN(5));
// console.log(sumToN(10));

// function printable(num)
// {

// for (i=1;i<=10;i++)    
// console.log(num + " x " + i + " = " + (num * i));

// };
// console.log(printable(3));

// const countDigits = (num) => 
// {

// let count = 0;

// while (num > 0)
//  {
// num = Math.floor(num / 10);
// count++;
//  }
// return count;

// };

// console.log("Count of digits in 1234:", countDigits(1234));
// console.log("Count of digits in 9:", countDigits(9));
// console.log("Count of digits in 10000:", countDigits(10000));

// function reverseNumber(num)
// {
// let reverse = 0;
// while (num > 0)
// {
// let digit = num % 10;
// reverse = reverse * 10 + digit;
// num = Math.floor(num / 10);
// }
// return reverse;
// };

// console.log(reverseNumber(1234));
// console.log(reverseNumber(500));
// console.log(reverseNumber(91));

// 

// function factorial(n)
// {
// let result = 1;
// for (let i = 1; i <= n; i++) {
// result = result * i;
// }
// return result;
// }

// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(1));

// function isPrime(num)
// {
// if (num <= 1)
// {
// return false;
// }
// for (let i = 2; i < num; i++)
// {
// if (num % i === 0)
// {
// return false;
// }
// }
// return true;
// };

// console.log(isPrime(7));
// console.log(isPrime(10));
// console.log(isPrime(2));
// console.log(isPrime(1));

// function printPattern(n) 
// {
// for (let i = 1; i <= n; i++)
// {
// let pattern = "";
// for (let j = 1; j <= i; j++) 
// {
//  pattern = pattern + "*";
// }
// console.log(pattern);
// }
// }

// printPattern(4);
