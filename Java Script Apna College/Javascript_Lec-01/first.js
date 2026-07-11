// Revision is completed.
console.log("Variables and Datatypes");

//Variable declaration in javascript (js).
//var --> Global variable.
//let --> local variable.
//const --> fixed or static variable.

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
x = null;
console.log(x);
y = undefined;
isfollowing = true;
x = 25;
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
