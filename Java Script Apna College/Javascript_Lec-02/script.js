// Revision of Operators and Conditional Statements is completed.
console.log("Operators and Conditional Statements");
//Arithmatic Operators.
let s = 5;
let t = 2;
console.log("s + t =",s + t);
console.log("s - t =",s - t);
console.log("s * t =",s * t);
console.log("s / t=",s / t);
console.log("s % t =",s % t);
console.log("s ** t =",s ** t); //iska matlab hai square ** two times of same value --> 5 ** 2 --> 5 * 5 = 25;

//Assignment Operators.
let x = 5;
let y = 6;

x += 4; // x = x + 4;
//x -= 5; // x = x - 5;
//x *= 6; //x = x * 6;
//x /= 5; //x = x / 5;
//x %= 4; //x = x % 4;
//x **= 2; //x = x ** 2;
console.log(x);

//Increment and Decrement Operators.



//Comparision Operators.
let a = 5;
let b = 2; // b = 2; // string count when "5";

console.log("a == b",a==b); //false
console.log("a >= b ",a >= b); //true

//Logical Operators.
let u = 6;
let v = 5;

 let cond1 = u < v; //true.//false.
 let cond2 = u == 6; //true.
 console.log("cond1 && cond2 =",u < v && u == 6);//true //false.
 console.log("cond1 || cond2 =",cond1 || cond2);//true
 console.log("!(conds1) or !(u<v) =", !(u<v));//false if u<v say true.

 //Ternary Operators: two operands a+b,one operand a++ and a--.
 //condition ? true output:false output
 //example. age > 18 ? "adult" : "not adult";

 //Conditional Statement.
 //1).if statement. to check the conditions is true(execution) or false(no execution).
 let age = 18; //25 to eligible for vote and 16 to not message
 if(age >= 18){

    console.log("Eligible for vote");

 }

 if(age < 18){

    console.log("Not Eligible for vote");

 }

 //ex: mode program.
//  let mode = "light";
//  let colour;

//  if(mode === "light"){
//     colour = "white";
//  }
//  if(mode === "dark"){
//     colour = "black";
//  }

//  console.log(colour);

 //2).if-else statement. to check the condition if the condition is true if block is execute and in case of false else block is execute.
 let age1 = 21;

 if(age1 >= 18){
     console.log("Eligible for vote");
 }
 else{
    console.log("Not Eligible for vote");
 }


 //ex : 
  let mode = "Blue";
 let colour;

 if(mode === "Dark"){
    colour = "Black";
 }
 else{
    colour = "White";
 }

 console.log(colour);
//even odd program: using if else condition.

let n1 = 10;
console.log("even and odd program using if else conditions");

if(n1 % 2  == 0){

   console.log("n1 is an even number", n1);

}

else{

   console.log("n1 is an odd number", +n1);

}
//3).else-if Statement: to check multiple conditions at a time.
//example:
let age2 = 20;
let age3 = 80;//80,17
if(age2 < 18){
   console.log("junior");
}else if(age2 > 60){
   console.log("Senior");
}else{
   console.log("middle");
}if(age3 < 18){
   console.log("junior");
}else if(age3 > 60){
   console.log("senior");
}
else{
   console.log("middle");
}
//example of mode.
// === both thing equality of words or data compared and with datatype also.
let mode1 = "White";
let color;
if(mode1 === "Dark"){
   color = "Black";
}else if(mode1 === "Blue"){
     color = "blue";
}
else if(mode1 === "Pink"){
   color = "pink";
}else{
   color = "White";
}
console.log(color);
 let age10 = 16;
//  ternary operators.
 let result = age10 >= 18 ? "adult" : "not adult";
 console.log(result);
 //use MDN Docs to see our webdevelopment reading knowledge.
 //Switch Statements.
 //alert("hello!"); //it is used to create popups in output screen.
 //prompt("hello!"); //it is use in js for pop up created in output and it takes input also.
//  let name10 = prompt("Enter a number");  //user se input lene ka tarika hai ye.
//  console.log(name10);              // value ko output pr show kare.

 //Q).Create a prompt to enter a number from user input is multiple of 5 or not.
 let num10 = prompt("Enter the Number");
 if(num10 % 5 === 0){
   console.log(num10,"is a multiple of 5");
 }
 else{
   console.log(num10,"is Not a multiple of 5");
 }

 //Q).Write a program of Marks of Students According to its Grades.
 let marks = prompt("Enter marks of Student"); //user se input lo.
 //console.log(marks);
 if(marks < 100 && marks > 90){
     console.log("Grade : A");
 }
 else if(marks < 89 && marks > 70){
      console.log("Grade : B");
 }
 else if(marks < 69 && marks > 60){
      console.log("Grade : C");
 }
 else if(marks < 59 && marks > 50){
      console.log("Grade : D");
 }
 else if(marks < 49 && marks > 33){
       console.log("Grade : E");
 }
else{
   console.log("Grade : F for Fail");
}  
        //OR
let score = 63;
let grade;

if(score >= 90 && score <= 100){
   grade = "A";
}else if(score >= 70 && score <= 89){
   grade = "B";
}else if(score >= 60 && score <= 59){
   grade = "C";
}else if(score >= 50 && score <= 49){
   grade = "D";
}else if(score >= 0 && score <= 49){
    grade = "F";
}


console.log(grade, "acording to your scores, your grade was : ");




