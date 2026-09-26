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
div.style.backgroundColor = "purple"; // -> color change from green to purple.
// div.style.visibility = "hidden";  // -> hidden hota hai box.


div.style.fontSize = "26px";  // -> fontSize -> change hota hai isse.

div.innerText = "Hello!"; // -> inner text change karte hain hm isse.


// we covered --> access and changes in DOM.
// ## Insert Elements : -

// --> let el = document.createElement("div");  // #New-Add : -

//1). node.append(el) // adds at the end of node(inside)
//a). element create --> b). add kijiye finally.


// eg. :- creation of button of html from javascript.

let newBtn = document.createElement("button");
newBtn.innerText 
console.log(newBtn);











