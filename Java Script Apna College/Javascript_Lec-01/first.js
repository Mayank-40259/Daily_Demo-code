// Revision is completed.
console.log("Variables and Datatypes");

//Variable declaration in javascript (js).

// Variables --> variables are containers for data.
// Reserved keyword in java script --> console not made variable --> because it is reserved keyword in javascript kyuki ye --> pehle hi use ho chuka hai as console.log();

// Types of Variables in JavaScript : Three-(3) types.
//var --> Global variable.
//let --> local variable.
//const --> fixed or static variable.


// var :- Variable can be re-declared and updated. & it is a global scope variable.
// var is old used before 2015 and it is not recommended to use var in modern javascript. ES6 (2015) introduced let and const keywords to declare variables.


// let :- Variable cannot be re-declared but can be updated. & it is a block scope variable. // normally we use let keyword to declare variable in modern javascript. ES6 (2015) introduced let and const keywords to declare variables.
// let a; // variable declaration;
// const :- Variable cannot be re-declared or updated. & it is a block scope variable. // it is used at constant value which is not changed in future. // normally we use const keyword to declare variable in modern javascript. ES6 (2015). --> PI = 3.14, GRAVITY = 9.8, LIGHT_SPEED = 3e8, etc.
// const a; --> it is not allowed to declare a const variable without initialization. it will give error. const variable must be initialized at the time of declaration.
// error nahi dekhna hai toh const a = 10; value de do must initialized.

//Modern Javascript ES6+ 2015 --> egmascript 2015 introduced let and const keywords to declare variables. It is recommended to use let and const keywords to declare variables in modern javascript.

// Block { code }
// let ka use as --> { let a = 10; console.log(a); } --> a ki value print hogi --> 10. 
// let ka use as --> { let a = 10; let a = 20; console.log(a) } --> error dega kyuki let variable ko re-declare nahi kar sakte hain in same block. 
// let as --> { let a = 10; { let a = 20; console.log(a) } } --> 20 print hoga kyuki inner block me re-declare kiya gya hai.
// 

// #Datatype in javascript :- it is defined as the which type of data stored by variable is called datatypes.
// it is classified into two types:-
//  1).Primitive Datatypes:- it is used to store simple values. & it is fixed in size. eg. Number, String, Boolean, Null, Undefined, BigInt, Symbol.
//  2).Non-Primitive Datatypes :- it is used to store complex values. eg. objects, arrays, functions, etc.
//  Number, String, Boolean, Null, Undefined, BigInt, Symbol --> Primitive Datatypes.
//  
// used in chrome to see datatype of a variable as  --> typeof variableName; --> it will return the datatype of a variable. eg. typeof a; --> it will return number if a = 10;
// typeof name --> 'String' & typeof price = number;
// object --> it is the collection of data in key-values.
// eg. student as object --> { name: "Mayank", age: 19, rollno: 2402309073, cgpa: 8.2, ispass: true, isfail: false } --> it is a collection of data in key-values.
//  name hai string, age hai number, rollno hai number, cgpa hai number, ispass hai boolean, isfail hai boolean.
// Note :- let --> update and re-declare ho sakta hai
//  const --> no updation nahi ho sakta update pr iskee object ki keys ko change kr sakte hain hm.
// 
const employee = {
    name: "Mayank Kumar",
    age: 20,
    EmployeeId: 2402969,
    salary : 50000,
    tax : 2000,
    Laptop : "ASUS",
    Company : "Nvidia",
};
// aap constant object ki keys ko change kr sakte hain yahan pr object ko change krne ke liye aapko pura collection change karna padega tabhi change hoga object.
// keys ko kaise access karte hain object ke ander --> employee["name"] --> it will return "Mayank Kumar" & employee["age"] --> it will return 20 & employee["EmployeeId"] --> it will return 2402969 & employee["salary"] --> it will return 50000 & employee["tax"] --> it will return 2000 & employee["Laptop"] --> it will return "ASUS" & employee["Company"] --> it will return "Nvidia".
employee["age"] = employee["age"] + 2;
employee["name"] = "Rahul Kumar";

console.log(employee["name"]);
console.log(employee["age"]);

employee["name"] = "Anshul Singh";
console.log(employee["name"]);


let z = BigInt("123");
let p = Symbol("Hello");


const PI = 3.14;
console.log(PI);
const Gravity = 9.8;
console.log(Gravity);


const profile = {
    username : "shradhakhapra",
    follow : true,
    posts : 195,
    followers : 56.9000,
    following : 4,
    youtube : "Apna College",
};
console.log(typeof profile["youtube"]);//check typeof keys in profile object.
const student = {
    fullname: "Mayank Kumar", 
    age : 19,
    ROllno : 2402309073,
    cgpa : 8.2,
    ispass : true,
    isfail : false,   
};
  student["age"] = student["age"] + 1; 
  student["fullname"] = "Rajan Sharma",// updates only keys of object student not object is stored in const datatype variable.
  console.log(student["fullname"]);
 
fullname = "Tony Stark";
console.log(fullname); 
age = 45;
console.log(age);
price = 1000.50;
x = null;         //pata toh hai ki iske ander kya hai pr iski ander khali value hai. //value ko jaan buj kr khali rakha gya hai 
console.log(x);
y = undefined;  //value hi nahi mili ya di gayi.  // pata hi nahi hai ki iske ander kya hai
isfollowing = true;
//x = 25;
let age1 = 50;
const pi = 3.14;
console.log(age1);
console.log(pi);
console.log(isfollowing);
isFollow = false;
console.log(isFollow);
console.log(x);
console.log(y);
console.log(price);
let age2= 56;
console.log(age2);

// Ques 1). Create a const object called "product" to store information shown in the picture.
//  
// 

const product ={
    name : "Parker Jotter",
    type : "Ball Pen",
    price : 270,
    color : "Black",
    offer : 5,
    isAvailable : true,
    isUnavalable : false,
    rating : "five star",
}

console.log(product);


// Ques 2). Create a const object called "profile" to store information shown in the picture.
const profile1 = {
    username : "@mayankkumar",
    posts : 739,
    followers : 313,
    following : 7,
    isVerified : true,
    bio : "I am a student of BCA 3rd year at SANSKRITI UNIVERSITY, Mathura, U.P. India.",
}

console.log(typeof profile1["username"]);
console.log(typeof profile1);
console.log(typeof profile1["posts"]);
console.log(typeof profile1["followers"]);
console.log(typeof profile1["isVerified"]);
console.log(typeof profile1["bio"]);
