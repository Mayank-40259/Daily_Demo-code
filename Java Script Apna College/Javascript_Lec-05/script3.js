console.log("Functions And Methods");
//Functions : it is a block of code that performs a specific task,can be invoked whenever needed;
//eg: || modiji || --> to call for meeting. || personal assistant || --> ||Driver call for driving|| --> ||Chief call for cooking. 
// || a piece of code as function || ---> calls to perform a specific task.
//example of functions.
//function as mapping : input/(inp.) ---> || Black box || ---> kaam output/(out.).

//1).
console.log("Hello World !"); //Hello World !.

//2).
let m = "abc".toUpperCase(); //ABC.
console.log(m);

//3).
let arr = [1,2,3];
let arr1 = [1, 2, 3].push(4); //[1,2,3,4].
console.log(arr1);

//Functions in javascript;
//1).function defination : declaration and defination of a function.
//syntax : function functionName(){
//   //do some work (statements);
//    //block of code;
//  }


//2).function call : actual call for function.
// syntax : functionName();


//3).Parametrize function. parameters passed as arguments from main function to permorm an operation or specific task.
//syntax : function functionname(parameter1, parameter2){
//  //do some work (statements);
//  } 

//example: 

//function defination and declaration;

function myFunction(){
    console.log("Welcom to Apna College & Engineering digest");
    console.log("Apna College build by shradhakhapra");
    console.log("Engineering digest build by vipul tyagi");
    console.log("We are learning (JS means JAVA SCRIPT)");


}

//function call and calling;
myFunction();//when we calling function 2 times that prints 2 times as;
myFunction(); //repeat is not good thing of code for coder/developer so minimize redundancy. //repetation --> redundancy //example : pubg game logic of math formulas to repetation of logic in game(repeate a work) from functions;

//Parameter function.
function myFunctioning(msg, n){
    //as parameter --> msg --> input as arguments from calling function;

    let k = "I Love Javascript (JS)";
    let l = k.concat(" " +msg+ " to " +n);
    console.log("Good Coder " +l);
    
}

//calling as input;
myFunctioning(25000 , 1200000); //arguments passed when passed in calling function.//not insert argument shown output --> undefined//insert arguments as values in paranthesis;

//sum of two numbers;
//function --> 2 numbers passed as arguments as(20,40);
function mySum(a , b){
    //local variables acts a and b; --> ishi function ke block or scope me rehta hai; --> blockscope
    //a and b are parameters as 20,40 argunts from calling function.
console.log("sum : " +(a + b));
    let c = a + b;
    console.log("Your sum is : " +c);//60
    return c; //after return the code is not executed as you can see below return c;
    console.log("after return");
}
//Note :  fix parameters like local variables of function --> block scope only accessible inside function only;
//Note0 :  variable c is local variable to function mySum only;
//Note1: function ke andar jo variable banate hai wo function ke block scope
//note2 : function me return keyword ka use value ko function se bahar bhejne ke liye kiya jata hai;
//Note3 : return keyword is used to return a value from function to calling function;
//now we will call function mySum;

//calling function as arguments passed;
let val = mySum(20 , 40); //c returns its value in val variable.
console.log("sum from return keyword with c: " +(val));//60

//Arrow Functions; it is the part of Modern javascript.
//Compact way of writing function in javascript;
//syntax : let functionName = (parameters) => {
//   //do some work;
//  }
//or 
//const functionName = (parameter1,parameter2) => {
//   //do some work;
//  }
// => sign of arrow 
//example of arrow function;
//multiplication function;
let myArrowFunction = (x , y) => {
    let z = x * y;
    return z;
}
let result = myArrowFunction(5 , 6);//30
console.log("Multiplication from arrow function : " +result);

//example of sum function;
let mySummation = (p , q) => {
    let j = p + q;
    console.log("j = " +j);//100
    return j;
}
let value = mySummation(40 , 60);
console.log("Addition from arrow function is : " +value);//100

//sumfunc. and mulfunc. with const variable;
//example of arrow function;
//multification function;
const arrowFunctionMultiply = (x , y) => {
    let z = x * y;
    console.log(" Yours multiplication of " +x+ " & " +y+ " is : " +z);//800
    return z;
}

const mul = arrowFunctionMultiply(20 , 40);
console.log("Your multiplication is : " +mul);//800


//Note : arrow function is prefered for a simple(add,subs,multi,divis,remainder) or single line operations not multiple.
//example of arrowfunction;
//addtion function;

const arrowFunctionAddition = (s , t) => {
    let r = s + t;
    console.log("addition is : " +r);
    return s + t;
}

//or

const arrowAdd = (s , t) => {  //it ia a variable but performing as function.
    console.log("addition of arrow function is : " +(r)); //90
    return s + t;
};


//
const printHello = () => {
    console.log("hello");
}


//let's practice;
//Ques1).Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
//Ques2).Create an arrow function to perform the same task as (Ques1).
//
// //Q1. solve
// function myString(str){
//     //Apna College; is a string.
//     let count = 0;
//     for(int i = 0;i <= str.length-1; i++){
//         if(str = )
//         count = str[i]/str.length;

//     }

//     console.log(count);

//     return vowles;

// }

// let numberofvowel = myString("Function");

//or
 function countVowel(str){
    //"Apna College", count = 5.
    let count = 0;
    for(const char of str){
        if(char === "a" || 
           char === "e" || 
           char === "i" || 
           char === "o" || 
           char === "u" 
        ) {
            console.log(char);
            count = count + 1;//count++;
        }
    }

    console.log(count);
    return count;

 }

 let vowel = countVowel("apna College");
 console.log(vowel);

 //using arrow function;Q2.solve
 
 const arrowmyString = (str1) => {
    let count1 = 0;
    for(let char1 of str1){
        if(char1 === "a" || 
           char1 === "e" || 
           char1 === "i" || 
           char1 === "o" || 
           char1 === "u"
        ) {
            console.log(char1);
            count1++;
        }

    }
     console.log(count1);
     return count1;
 }

const vowel1 = arrowmyString("software engineering");
console.log(vowel1);

//6).forEach Loop in Arrays;it is same as method eg: "Abc"(string).toUpperCase()(method) --> method. function --> it is associated with object to made method;
//method is a functions when we associated with data,object to made --> methods.
//arr.forEach(callBackFunction)
//CallbackFunction : here, it is a function to execute for each element in array.
//* A callback is a function passed as an arguments to another function.
//synax of for Each Loop : 
// arr.forEach((val) => {
//       
//    console.log(val);
//
//   })
//in this callback function having three things : value(items),idx(position),array(itself).
//function passed as parameters/arguments in to another function that is called callback function.like eg :
function abc(){
    console.log("hello");
}

function myFunc(abc){
    return abc;
}

//create an array.
let arr3 = [ 1, 2, 3, 4, 5];

arr3.forEach(function printVal(idx1,idx3,arr3) {  // val --> //value at each index.

    console.log(idx1,idx3,arr3);

})

//create an 2nd array. using arrow function.
let arr4 = ["pune","delhi","mumbai","hyderabad","bengulru","gurgaon","noida"];

arr4.forEach((text,idx2,arr3) => {

    console.log(text.toUpperCase(),idx2,arr3);

})

//Note : Higher order functions/methods. this for each function.
//jo dusre functions ko as a parameter le lete hai and use kar rahe hote hai ya kisi function ko return kr rahe hote hai.
//means callback function is called a higher order function.

//Ques 3.for a given array of numbers,print the square of each value using the forEach loop.
//Q3.solve.square-->multiplied by itself.
let arr5 = [1,2,3,4,5,6];

arr5.forEach((val4,indx5,arr5) => {

    console.log(val4*val4 + " = " + indx5 +" --> "+ arr5);//val3**val3.

})

//or write callback function also :
let number = [67,56,39];

let calcSquare = (val3,indx4,number) => {

    console.log(val3*val3 + " = " + indx4 +" --> "+ number);//val3**val3.

};

number.forEach(calcSquare);

//Some more Array Methods;
//1).Map :creates a new array with the result of some operation.The value its callback returns are used to form new array.
// arr.map(callbackFunction(value,index,array))
//syntax : 
// let newArr = arr.map((val) => {
//   
//    return val*2;
//
// })
//example.using map.

let number1 = [45,55,65,75,85,95];

let newArr = number1.map((val5) => {

    console.log(val5);//same array print.
    return val5 * 2; //return same array or perform operations in it. val5**val5 or val5*val5.

})

console.log(newArr);

//use of forEach : normally for calculation and print with indexing.
//use of map : using of values of initial array to perform a new array with an operation perform to result in new array.


//2).filter : Creates a new array of elements that gives true for a condition/filter.
//eg: all even elements.
//syntax : 
//  let newArr = arr.filter((val) => {
//    
//     return val % 2 === 0;//true --> element stored in new array performed //false --> not stored in new array.//we can filter an array by condition to perforrm new array. //=== it includes datatype also .
//   
//    })
//some filtered out values ke sath new array banta hai pr main array same rahega.


let numberArr = [1,2,3,4,5,6,7,8,9,10];
let newgreater3 = numberArr.filter((val8) => {

    return val8 > 3;

})

let newoddnumberArr = numberArr.filter((val7) => {

    return val7 % 2 !== 0;

})

let newevennumberArr = numberArr.filter((val6) => {

    return val6 % 2 === 0;

})

console.log(newevennumberArr);
console.log(newoddnumberArr);
console.log(newgreater3);

//3).Reduce : Perform some operations & reduces the array to a single value.It returns that single value.
//javascript demo : Array.reduce(). by operation perform sum and average of given values. 
//example 1 : 

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4....n.
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
    );

    console.log(sumWithInitial);//10
    //Expected output : 10.

//example 2 : 

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let initial = 0;
const newarray = array2.reduce((res , current) => {

    return res + current; //,initial;

});

console.log(newarray);//55


//example 3 : 
let array3 = [5, 4, 3, 2, 1];

const arrayOutput = array3.reduce((prev , currentvalue) => {

    return prev > currentvalue ? prev : currentvalue;

})

console.log(arrayOutput);

//Ques4).We are given array of marks of student.Filter out of the marks of students that scored 90+.
//Ques5).Take a number n as input from user.Create an array of number from 1 to n.
//a). use the reduce method to calculate sum of all numbers in the array.
//b). use the reduce to calculate product of all numbers in the array.

//Q4). :
let marksofstudent = [60,98,33,97,95,92,90,80];

let topperstudent = marksofstudent.filter((value10) => {

    return value10 > 90;

})

console.log(topperstudent);//98,97,95,92

//Q5). :
let n = prompt("Enter the number n : ");
let arr10 = [];
for(let j = 1;j <= n; j++){
    arr10[j-1] = j; //1(0),2(1),3(2),4(3),5(4).
   // console.log(arr10[j-1]); //each every iteration of array.

}

console.log(arr10);

//a). : 
let outputsumofnumbers = arr10.reduce((res1 , currentingvalue) => {

   return res1 + currentingvalue;

})

console.log(outputsumofnumbers);

//b).  :

let factorial_as_product = arr10.reduce((res3 , n) => {

    return res3 * n; //factorial of 4! --> 1*2*3*4 = 24. & 5! --> 1*2*3*4*5 = 120.

})

console.log(factorial_as_product);

