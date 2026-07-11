// Revision of js of lec-04
console.log("ARRAYS And ARRAYS Methods");
//Arrays : it is a collection of similar kind of data and elements is called Arrays.
//it is a linear data stucture. at a line | 0 | 1 | 2 | 3 | 4 | 5 |;
//nAN error --> means --> Not a Number;
//Create Array : 
//let heroes = ["ironman","captain america","hulk","thor","batman"];
//let marks = [96,75,48,83,66];
//let info = ["rahul","86","Delhi",];
//student info stored in an array or an object as student -->[name,age,city,cgpa];
//addition of marks in arrays.
//array also self object when write in console typeof marks,heroes.
//property-->value degi,method-->kaam karega.
//array in js is an object but not print as object.
//Array Indices : arr[0],arr[1],arr[2]....arr[n];
//   arrays indices ---> | 0 | 1 | 2 | 3 | 4 | 5 |.
// as hello | arr[0] = h,arr[1] = e,arr[2] = l,arr[3] = l,arr[4] = o | --->  | h | e | l | l | o |.
// data in arrays -->        | 97 | 82 | 64 | 76 | 86 |;
//array indices arr[0...n] =   0    1    2    3    4    
//in arrays values stored in linear fashion.
//value or data in array also change by marks[2]= 64 --> marks[2] = 66;
//array is mutable in java-script.


let marks = [96,75,66,80,85];
console.log(marks);
console.log(marks.length); //property

let heroes = ['ironman','spiderman','hulk','thor','shaktimaan','antman'];
console.log(heroes);
console.log(heroes.length); //property

let cities = ["delhi","pune","mumbai","hyderabad","benglore","noida","gurgaon"];
console.log(cities);
console.log(cities.length); //property


//looping an array.
//printing all elements of an array.eg:using for-loop,for of loop and for in loop also used.,while loop,
//1).for-loop: //used for arrays.
for(let j = 0;j < heroes.length; j++){ //<= arr.length-1 --> correct,//< arr.length --> correct.
    console.log(heroes[j]);
}

//2).for-of-loop: //used for arrays.
for(let hero of heroes){
    console.log("hero = " +hero.toUpperCase());
}
for(let city of cities){
    console.log("city = " +city.toUpperCase());
}

//3).for-in-loop: //not in use for arrays.
for(let city in cities){
    console.log("city = " +city,"city name = ");
}



let sumofmarks = 0;
for(let i = 0;i <= marks.length-1; i++){
    sumofmarks = sumofmarks + marks[i];
    console.log("marks of subject " +i+ " is :", sumofmarks);

}
console.log("total no. of marks : "+sumofmarks);

//lets Practice : 
//Ques1).for a given array with marks of students --> [85,97,44,37,76,60].find the average marks of the entire class.
let studentmarks = [85,97,44,37,76,60];
console.log(studentmarks);
let sumofstudentmarks = 0;
for(let m = 0;m < studentmarks.length; m++){
    sumofstudentmarks = sumofstudentmarks + studentmarks[m];

}
console.log("total sum of marks of students : ",sumofstudentmarks);
let avgmarksofstudent = sumofstudentmarks/studentmarks.length;
console.log("the average marks of the entire class is : " +avgmarksofstudent);
console.log(`avgmarksofstudent of the entire class = ${avgmarksofstudent}`);

//Ques2).for a given array with prices of 5 items --> [250,645,300,900,50].All items have an offer of 10% OFF on them.Change the array to store final price after applying offer.
//1st).Methods.
let itemsprize = [250,645,300,900,50];
console.log(itemsprize);
let sumofprize = 0;
for(let n = 0;n < itemsprize.length; n++){ 
    sumofprize = sumofprize + itemsprize[n]*90/100;// 90% of 2145 is 1930.5//10% of 2145 is 213.5  //100% --> 10% off all items is 100%-10% --> 90% price buy. 

}
console.log("total or final prize of five-(5) items after applying 10% off(100% - 10% = 90%) all of them is = " +sumofprize);

//2nd).Methods.
let items = [250,645,300,900,50];
console.log(items);
let idx = 0;
for(let value of items){
    console.log(`value at index ${idx} = ${value}`);
    let offer = value / 10;
    items[idx] = items[idx] - offer;
    console.log(`value after offer = ${items[idx]}`);

    idx++;

    //offer = value / 10;
   // value = value - offer;
}

//Arrays in javascript:
//Array Methods: it used to stores data in an app.
//methods are two types in Arrays. 1).change arrays (some methods) & 2).not changes in arrays (some methods) --> new arrays formed.as strings methods applied.
//push-->add || pop --> delete.

//1).Push() : add to end.
//
//2).Pop() : delete from end & return.
//
//3).toString : converts array to String.
//
//4).concat() : joins multiple arrays & return result.
//
//5).unshift() : add to start.
//work as push() method.
//6).shift() : delete from start & return.
//work as pop() method.
//7).slice() : returns a piece of array //not change in original array.
//  slice(startidx,endidx);
//8).splice() : change original array(add,remove,replace);
//splice(startidx,delCount,newEl1);


//1).push(). adding elements to at end
let foodItems = ["potato","apple","litchi","mango","onion","tomato","radish","carrot"];
console.log(foodItems);
foodItems.push("chips","burger","paneer","samosa","patties");
console.log(foodItems);

//2).pop().removing elements from starting
let deleteditems = foodItems.pop();
console.log(foodItems);
console.log("deleted",deleteditems);

//3).toString(). convert arrays to string
console.log(foodItems.toString());

//4).concat().
let marvelHeroes = ["ironman","antman","spiderman","thor","hulk"];
console.log(marvelHeroes);
let dcHeroes = ["superman","batman","flash"];
console.log(dcHeroes);
let indianHeroes = ["shaktimaan","krish"];
console.log(indianHeroes);
let heroesAll = marvelHeroes.concat(dcHeroes,indianHeroes);
console.log(heroesAll);

//5).unshift() :as push to starting elements
let value = marvelHeroes.unshift("captain america"); //original arrays ke ander change karke deta hai.
console.log(value);

//6).shift() :as pop from starting element
let value1 = marvelHeroes.shift(); //original arrays ke ander change karke deta hai.
console.log("deleted ",value1);

//7).slice() : it is used for made arrays copy.
console.log(marvelHeroes);
console.log(marvelHeroes.slice(1,3));//antman and spiderman.

//8).splice() : 
 let arr = [1,2,3,4,5,6];
 let value2 = arr.splice(2,2,101,102);
 console.log(value2);
 console.log(arr);
 //a).Add Elements no delete but element add.
 let value3 = arr.splice(2,0,104,105);
 console.log(value3);
 console.log(arr);
 //b).Delete element.
 let value4 = arr.splice(2,2);
 console.log(value4);
 console.log(arr);
 //c).Replace elements.
 let value5 = arr.splice(2,2,1000,2000);
 console.log(value5);
console.log(arr);

//Ques3).Create an array to store companies --> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix".
//a).Remove the first company from the array. //using shift().
//b).Remove Uber & Add Ola in its place. //using splice().
//c).Add Amazon at the end.  //using push().

let arr1 = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

//a).
let val = arr1.shift();
console.log(val);
console.log(arr1);

//b).
let val1 = arr1.splice(1,1,"Ola");
console.log(val1);
console.log(arr1);

//c).
let val2 = arr1.push("Amazon");
console.log(val2);
console.log(arr1);


