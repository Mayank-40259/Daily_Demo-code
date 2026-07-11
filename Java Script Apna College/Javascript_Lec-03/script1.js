// Revision of js-lec-03
console.log("LOOPS AND STRING");
//1st).LOOPS

//Loops are used to execute a piece of code again & again.by iteration.
//types of Loops. 1).For Loop,2).Do-while Loop,3).while Loop,4).for each loop.
//for Loop.syntax.
//     //(initialization;condition;incre++/decre--)
//for(let i = 1; i <= 5; i++){
//  console.log("APNA COLLEGE");
//  }
//ex1.Print 1 to 5.
for(let i = 1; i <= 5; i++){
    console.log("Apna College"); //5 times executed.
}
console.log("Loops has ended");
//ex2.Calculate sum of 1 to 5.
let sum = 0;
for(let j = 1; j <= 5; j++){
    sum = sum + j;
    //console.log(sum); //
}
  console.log("Your sum is : ", sum); //at collective manner sum is 15.
//2).Infinite Loop : A loop that never ends is called infinite loop.stoping condition is always true.
//3).while loop : jo kaam for se kr sakte hai voh while loop se kr sakte hai pr jo kaam while loop se kr sakte hai vo  for loop se nahi ho sakta.
//while Loop. syntax :  initialization;
// while(condition){
 // //do some work.//statements.
 //incre++/decre--;
// }
//ex3.print 1 to 5;
let m = 1;
while(m <= 5){
    console.log(" Apna college m = ", m);
    m++;
}
console.log("Loop is ended");
//4).do-while loop. one time execution of block of code after condition check is called do-while loop.
//do while loop : syntax. initialization;
// do{
// statement;
// incre++/decre--;
//}while(condition);
//ex4. Print 1 to 5;
let k = 1;
do{
    console.log("k = " +k);
    k++;
}while(k <= 5);

 //eg apnacollege print 21 times.
let n = 20;
do{
    console.log("Apna College");
    n++;
}while(n <= 40);

//5).for-of loop and for-in loop : it is used for to iterate (loop lagana on some special datatype)
//a).for-of loop: loops on strings and arrays.eg."Tony Stark".
//Syntax : for(let val of strVar){
//  //do some work (Ststements) //used in no. of characters count in a column on fronted screen 16digit password.
// }
//for of loop.
let str = "Apna college";
for(let v of str){  //variable v used as iterator in for of loop to store string str character in it.
    console.log("v = " +v);
}
//eg. size of characters in string = "javascript".
let str1 = "Java Script";
let size = 0;
for(let u of str1){
    console.log("u = " +u);
    size++;
}
console.log("String size : ", size);//11
//b).for-in loop : loops are used for/in objects or in arrays.
//syntax : for(let key in objVar){ //variable key interators used as for object keys inside key variable.
// //do some work(Statements)
// }
//eg.for in loop.
let student={
    name : "Mayank Kumar",
    age : 20,
    cgpa : 8.5,
    isPass : true
};
  for(let key in student){ //keys(name,cgpa,isPass,age) inside go from student class as objectvariable into w.
    //console.log(key);
    console.log("key =", key, "  value =", student[key]); //keys as in key variable and values of keys go in values through student[key of keys of student class or objectvariable]
}

//practice some Questions.
//Q1).print all even numbers from 1 to 100.
//Q2).print all numbers from 1 to 100.
//Q3).print all odd numbers from 1 to 100.

for(let p = 0; p <= 100; p++){
    if(p%2 == 0){ //even number
        console.log(p);
    }
}
for(let q = 0; q <= 100; q++){
    if(q%2 != 0){ //odd numbers
        console.log(q);
    }
}
for(let o = 0; o <= 100; o++){
    console.log(o); //all numbers (odd + even).
}

//creating prompt: 
//Q4).Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let gameNum = 25;
let userNum = prompt("Guess the game Number : ");

while(userNum != gameNum){ // !== --> pop up created error. // != --> correct work.
    
   userNum = prompt("You entered wrong number. Guess again : "); //gamelogic.
}

console.log("congratulations, you entered the right number");

//2nd).STRING 

//String is a sequence of characters used to represent text.
//it is the collection of sequentional characters.in javascript both used double codes(" ") and single codes(' ') to opening and ending.
//in string we have see in java and javascript --> inbuilt properties and functions --> called methods.
//eg: sentence,paragraph,words-->spellings.

//let str = "Apna College"; ---> Create String.
//str.length(); --> length of string ---> String Length.
//str[0],str[1],str[2] --> String Indices.//string[position of character of string].
//in objects we have keys access as obj.key --> in string we see as string.length.

let string = "Apna College.";
let string2 = 'College Wallah';
console.log(string[10]);//g
console.log(string2[3]);//l

//Template Literals in javascript.
//--> A way to have embedded expression in string.
//eg : `this ia a template literal`.
//String Interpolation :
//--> to create string by doing substitution of placeholders.
//eg: `string text ${expression} string text`.
//use of backtric in template in js : --> `template`.
//template is a special type of string.

//Template literals.
let sentence = `this is a template literals`;
console.log(sentence);

//Real life example use of Template.

let obj ={
    item : "pen",
    price : 10,
}
//we print item and price at a  single line to use of template literals line. convet values as integer into string. blue 10 in string--> whit 10 in template.
console.log("the cost of", obj.item, "is", obj.price, "rupees");
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
let specialstring = `this is a template literals ${1 + 2 + 3}`; //6
console.log(specialstring);
//use escape character \n --> next line ,\t --> bunch of tabs ,
console.log("Mayank kumar \n Tony Stark");
console.log("Apna\nCollege");
let string1 = "Apna\tCollege"; //12. 11 character and 1 for \t --> bunch of tabs.(11+1 ==> 12).
console.log(string1.length);


//String Method in javascript. 
//** :--> functions/methods :both are same. method kuch bhi kaam karna.
//these are built-in function to manipulate a string.
//1).string.toUpperCase(). "abc" to "ABC".
//2).string.toLowerCase(). "ABC" to "abc".
//3).string.trim() //remove whitespaces.
//4).string.length(). any method we apply in string with print new string created with method.when we print string to print main string in it. 
//5).string.slice(start,end?)//returns part of string.
//6).string.concat(string2)//joins string2 with string1.
//7).string.replace(searchVal,newVal)//replace character from string.
//8).string.charAt(index)//character with index printing.eg: 0 index pr character konsa hai..
// and more. 


let string3 = "Apna CoLLege";//immutable string.
console.log(string3.toUpperCase());//APNA COLLEGE.//new string //new value.
let string4 = "College Wallah";
console.log(string4.toLowerCase());//college wallah.//new string//new value.
let string5 = " Physics Wallah  ";
console.log(string5.trim().toLowerCase().toUpperCase());//new string//new value.// trim(" A ")-->toLowerCase("abc")--->toUpperCase("ABC").//PHYSICS WALLAH.
//replacement string.
let string6 = "J Love Javascript";
string6 = string6.replace("J","I");
console.log(string6);

//practice Question:
//Ques.5). Prompt the user to enter their full name.Generate a username for them based on the input.
//start username with @,followed by their full name and ending with the fullname length.
//eg : user name = "shradhakhapra",username should be "@shradhakhapra13".
//solve :

//1st method.
let username = prompt("Enter full name : ");
let specialusername = `@${username}13`;
console.log("@"+username+username.length);
console.log(specialusername);

//2nd method.
let fullname = prompt("Enter your fullname without spaces");
console.log("@"+fullname+fullname.length);

