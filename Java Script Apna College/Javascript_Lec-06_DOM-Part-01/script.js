console.log("DOM --> Document Object Model");
// start DOM.
// adding three files in a folder html,css,js and connects with html boiler plate code.
// to study DOM we need to create a folder and add three files in it.
// Learned new topics in DOM of adding functioning to our website --> through server side running javascript code in browser console & manipulating the DOM elements using javascript code.

// 
// The 3 Musketeers of Web Dev --> HTML(Structure)  CSS(Style)  JavaScript(Logic).
// Stater Code : -
// <style> tag connects HTMl with CSS
// <script> tag connects HTML with JavaScript.
// alag se js ki  file banane se readability badti hai and modularity -> | html |--| css |--| js | .
// browser caching.

// alert("Apna College");

// #Window Object:-
//--> The window object represents an open window in a browser. it is browser's 
//     object(not JavaScript's) & is automatically created by browser.
//--> It is a global object with lots of properties & methods.
// console.log is a method of window object. so we can write console.log() or window.console.log() both are same.
// ex:-
console.log("Hello World"); //same work
window.console.log("Hello World2"); // same work
window.alert("Hello World3");

// window use in console to acces all features of dom and functions
// to access dom only in console use this -> console.dir(window.document)
// console.log --> to print things.
// console.dir --> document object print karane ke liye --> properties / methods -> specially treat karta hai.
// console.dir --> window object ka part hai.


// ## What is DOM ?
//  all html tags are converted in javascript and js access these tags from object as object setteled in js of html tags --> and formation of special object is known as Document Object Model (DOM).
// --> When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.
// # Diagram : - 
//                                        ----------
//                                        | window | <--- node hai ye ek aise hi or bhi nodes hain 
//                                        ----------
//                                             |
//                                         ----------
//                                         |document|
//                                         ----------
//                                              |
//                                          --------
//                                          | html |
//                                          --------
//                                              |
//                      ----------------------------------------------
//                      |                                            |
//                    --------                                    -------
//                    | head |                                   | body |
//                    --------                                   --------
//                       |                                           |
//      ----------------------------------               ------------------------ 
//      |          |          |          |               |                      |
//  --------    --------   --------   --------         -------               ----------
//  | meta |    | meta |  | title |   | link |         | div |               | script |
//  --------    --------  ---------   --------         -------               ----------
//                                                       |
//                                           ----------------------------
//                                           |        |         |        |
//                                        -------   ------    -----   -------
//                                        | img |   | h2 |    | p |   | div |
//                                        -------   ------    -----   -------
// ## Summary :- 
// --> DOM --> html ko javascript ke ander access karne ka tarika hai dom.
// --> DOM --> ek tree like structure hai uske ander html and body tags hain and hmne uske hisab se body and head ko bhi print karwa diya 
//  eg :-
 console.log(document.body.childNodes[1]);
//  ye mere kahan kaam ayega  --> apne dekha hoga websites me darkmode/lightmode hota hai changes karne ho websites me.
// ye jb kaaam ayega jb mujhe apne html code me changes karne ho toh me apni website ke code ko toh nahi kholta hu jake darkmode karne ke liye website pr hi options hote hain.
// but changes ho sakte hain vo changes javascript karta hai hamare liye.
// eg  : - document.body.style.background = "green"; --> color background of website change ho jayega hamara.
// document.body.childNodes[3].innerText = "abcd"; --> heading chnage ho jayegi

// hame html css files nahi chedni hm dynamically karna chahte hain changes ko toh hm use karenge DOM ko.


console.dir(document.body);
console.dir(document.head);
// console.log(document.body);

// Note --> dom elements are not accessable when we write our script tag before body tag in html.


// ## DOM Manupulation :-
// 1). --> Selecting with id.
//   -> document.getElementById("myId")
//  -> #id -> id ko hm use karte hain by hash and it is unique and it is different of each tags. 
// use case :-

// single element hai ish liye Element hai.
let heading = document.getElementById("heading"); //h1
console.dir(heading); // when empty collection jb koi element exist nahi karta tb print hoga  --> null.

// -----> Dom is very important for Using in React --> Methods used.

// 2). --> Selecting with class.
// -> document.getElementsByClassName("myClass")
//  -> .class -> class ko hm use karte hain by using dot 
// use case :- 

// multiple element hai ish liye Elements hain.
let headings = document.getElementsByClassName("headings");  // empty hoga collection element exist nahi karta toh print hoga --> empty html collection aata hai.
console.dir(headings); // --> html collection ko return karta hai jo ki array jaisa hi hota hai.

// 3). --> Selecting with tag.
// -> document.getElementByTagName("p")
// 
// 




