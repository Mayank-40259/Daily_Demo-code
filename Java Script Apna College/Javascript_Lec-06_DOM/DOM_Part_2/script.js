// DOM --> Document Object Model --> Part_2-(two)
console.log("DOCUMENT OBJECT MODEL PART-02");
// DOM - Manupulation : - 

// ## Attributes : -
// 1). getAttribute(attr) // to get the attributive value.

// 2). setAttribute(attr, value) // to set the attributive value.

// # Style : -
// --> node.style

// div --> node.
// 1).getAttribute(attr) eg :- attribute ki value ko kaise access karein.

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);       // box

let name = div.getAttribute("name");
console.log(name);  // JSDiv

let para = document.querySelector("p");
console.log(para.getAttribute("class")); // para 


// 2).setAttribute(attr, value) eg :- attributte ki value kaise set karein ya previous to newest change kaise karein.

let para2 = document.querySelector("p");
console.log(para.setAttribute("class","newClass"));


// # Style node :-
// node.style.

let div1 = document.querySelector("div");

// div.style --> inline style access easily from html tags written css code. 

div.style.backgroundColor = "green";  // -> color set .
div.style.backgroundColor = "dodgerblue"; // -> color change from green to purple.
// div.style.visibility = "hidden";  // -> hidden hota hai box.


div.style.fontSize = "26px";  // -> fontSize -> change hota hai isse.

div.innerText = "Hello!"; // -> inner text change karte hain hm isse.


// we covered --> access and changes in DOM.
// ## Insert Elements : -

// eg. :- creation of button of html from javascript.

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

// --> let el = document.createElement("div");  // #New-Add : -
//a). element create --> b). add kijiye finally.

//1). node.append(el)  // adds at the end of node(inside).
//2). node.prepend(el) // adds at the start of node(inside).
//3). node.before(el)  // adds before the node (outside).
//4). node.after(el)   // adds after the node (outside).


let p2 = document.querySelector("p");
// p2.append(newBtn);    // inside of the node but after and end of node.
// p2.prepend(newBtn);  // inside of the node but start of node.
// p2.before(newBtn);  // outside of the node. but before or start from node.
p2.after(newBtn);  // outside of the node but after or last of the node.


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";

document.querySelector("body").prepend(newHeading);

let para3 = document.querySelector("p");
para3.remove();  //

newHeading.remove(); // 

// in mdn document --> .appendChlid(); & .removeChild(); --> exact message and usage kya hota hai.

// ## Let's Practice :-
// Ques 1). Create a new button element. Give it a text "click me",
//            background color of red & text color of white.
//   --> Insert the button as the first element inside the body tag.
// 
// 
// Ques2). Create a <p> tag in html, give it a class & some styling.
//           Now create a new class in CSS and try to append this class to the <p> element.
//--> Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.
// 

















