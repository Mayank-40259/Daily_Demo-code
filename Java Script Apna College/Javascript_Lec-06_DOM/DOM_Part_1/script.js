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
//                                        | window | <--- node hai ye ek aise hi or bhi nodes hain .
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
// document.body.childNodes[3].innerText = "abcd"; --> heading change ho jayegi

// hame html css files nahi chedni hm dynamically karna chahte hain changes ko toh hm use karenge DOM ko.
// dynamic changes + manipulation --> DOM (Document Object Model).


console.dir(document.body);
console.dir(document.head);
// console.log(document.body);

// Note --> dom elements are not accessable when we write our script tag before body tag in html. // --> tabhi toh hamari website functioning kr payegi.


// ## DOM Manupulation :-
// Elements select karne ke tarike. 
// -----> Dom is very important for Using in React --> Methods used. 


// 1). --> Selecting with id.
//   -> document.getElementById("myId")
//  -> #id -> id ko hm use karte hain by hash and it is unique and it is different of each tags. 

// use case :-
// single element hai ish liye Element hai.
let heading = document.getElementById("heading"); //h1
console.log(heading); // jo  hamari me likhi hai html code me vo aayegi.
console.dir(heading); //window object --> DOM --> inside directory me jo heading hai hamari -->> h1 tag in dom ki directory me kaise hai.  
// when empty collection jb koi element exist nahi karta tb print hoga  --> null.



// 2). --> Selecting with class.
// -> document.getElementsByClassName("myClass")
//  -> .class -> class ko hm use karte hain by using dot 

// use case :- 
// multiple element hai ish liye Elements hain.
let headings = document.getElementsByClassName("headings");  //
console.log(headings);
console.dir(headings);  // --> html collection ko return karta hai jo ki array jaisa hi hota hai. --> very similar to array as index hain and length hai pr push and pop nahi hote hain yahan.
// note --> agar hm galat class or id name de de toh collection khali ayega hamare me.
// jb empty hoga collection element exist nahi karta toh print hoga --> empty html collection aata hai.



// 3). --> Selecting with tag.
// -> document.getElementByTagName("p")

// use case : -
// multiple tags ko directly kaise select karein
let parahs = document.getElementsByTagName("p");
console.log(parahs);
console.dir(parahs);


// inse bhi best takrike hote hain elements selection ke.

//  ## using Query Selector :- --> it returns Nodes List .
// . se likhte hain hm class ko in querys me classname dete time. and id ko # se. and id ke liye 1). hi rahega kyuki vo unique hoti hai each tag ki.
// 1). document.querySelector("myId / myClass / tag") --> returns first element.
// use Case :-

let element = document.querySelector("p"); // #myInfo --> p //1st element // ish tag ka first element. matlab pehli line ish tag ki jaise p -> first paragraph.
console.log(element);
console.dir(element);

// 2). document.querySelectorAll("myClass / tag") --> returns a NodeList.
// use Case :- 
// jb sare chahiye ho hm ko tb.

let allElements = document.querySelectorAll(".headings"); // p --> .headings. // for all elements.
console.log(allElements);
console.dir(allElements);


// ##Properties :- get kr sakte hain values ko. --> check || set bhi kr sakte hain hm usko change bhi kr sakte hain hm usko. --> update.
//  to access our element and changes their values.

// 1).tagName : - return tag for element nodes.
// e.g :-
// write in console as element and all element are two variables of query selectors 
// element.tagName --> BUTTON || allElements.tagName --> undefined.

// 2).innerText : - return the text content of the element and all its children.
// it is a tree like structure. || first level --> node --> parent node.
//                                            -------
//                                           | body | <---- parent node
//                                           --------
//                                              |
//                     ---------------------------------------------
//                     |                                           |
//                 -------                                    ----------
//                 | div | <- parent Node for 3rd level.      | script |    <----- child Nodes at this 2nd level.
//                 -------                                    ----------             
//                     |
//                   -------------------------------
//                  |         |           |         |
//              | img |    | h1 |      | p |     | div |     <- child node for 2nd level parent node. || these all are siblings with each other.
// 
// parent --> child --> sibling.
// 
// <body>
//       <div>
//            <img>
//               <h1></h1>
//               <p></p>
//               <div></div>
//       </div>
//            <script></script>
// </body>


// Homework Question.
//                      | body |
//                          | -> firstChild.lastChild
//                      | div |
//                         | -> body.children[0]
//              --------------------------------------
//             | ->firstChild       | -> midChild    | -> lastChild
//          | img |              | img |           | h1 |
//         div.children[0]     div.children[1]      div.children[2]
// 


// DOM Be :- it is used in navigation ek level se dusre me kaise jaaye 
// 1).text nodes
// 2).comment
//  3).elements --> development ke times pr use karte hain hm.

// e.g :-
console.dir(document.body.firstChild); // --> text.

//  accessing elements in above tree structure.
// create a div and inside paragraph.
// check in console of browser. --> document.querySelector("div").children;
// HTMLCollection --> [div]0: divlength: 1[[Prototype]]: HTMLCollection


// Homework problem :-
// Above tree structure --> 3 types comment,text and element --> MDN read this.


// accessing div tag.
let div = document.querySelector("div");
console.dir(div);
console.log(div.innerText);


// inner text ko hm change bhi kr sakte hain ab tak hamne get kiya check kiya pr hm set bhi kr sakte hain.
// div.innerText = "abcd"; ---> 'abcd' hat jayega sab fruits wale div bhi.
// 

// old heading. 
let oldheading = document.querySelector("h1");
console.log(oldheading);

// 3).innerHTML :- return the plain text or HTML contents in the element.
console.log(div.innerHTML); // --> html related information bhi aati hai text ke ander. --> adding <i></i> italic tag.
// set bhi kr sakte hain hm 
//  div.innerHTML = "<div>inner div</div>"; --> div innner div aayega likha hua in output of website.
// 4).textContent :- returns textual content even for hidden elements.


// ## Let's Practice :-
// Q1). Create a H2 heading element with text - "Hello JavaScript".Append "from Apna College students" to this text using JS.
// solution --> practice js dom.
// Q2). Create 3 divs with common class name - "box". Access them & add some unique text to each of them.
// solution --> practice js dom.
// 




