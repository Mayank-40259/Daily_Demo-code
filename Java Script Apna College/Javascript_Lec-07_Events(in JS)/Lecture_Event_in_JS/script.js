// Starting Events in Java Script.
console.log("Events in Java Script");

//  Started new Chapter Event in Javascript.
// Events like time and date related and an event perform like topics are covered.



// ## 1). Events in JS : - 
// --> The change in the state of an object is known an Event.
//  --> Events are fired to notify code of "interesting changes" that may affect code execution.

// --> these can arrise through user interactions to submit a form,download movies and document and print the admitcard ... etc.
// --> Read also in MDN Documentation -> Event reference.

// Mouse events (click, double click ...etc)
// Keyboard events (Keypress, keyup, keydown)
// Form events (submit ...etc)
// Print events, Download & many more .... etc.


// --> Better way to use Event Handling in Javascript.
//  node.event = () => {
//    handle here.
//  }
// 

// ## 2). Event Object :-
// --> It is a special object that has details about the event.
//  --> All event handlers have access to the Event Object's properties and methods.

// --> node.event = (e) => {
//  handle here
// }

// --> e.target, e.type, e.clientX, e.clientY . 


// priority -> (more) Event Handling by Javascript  code >>>> (less) Event Handling by html inline Event Handling.
// Note :- event handle karenge through js arrow function.


// btn1 ke liye . 
let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.target);
//     console.log(evt.type);
//   //  console.log(evt.clientX);
//   //  console.log(evt.clientY);
//     console.log(evt.clientX, evt.clientY);
//     // console.log("Handler 1"); // btn1 was clicked.
//     // let a = 25;
//     // a++;
//     // console.log(a); // 26 
// };

// override ho jayega handler 2 print hoga agar  btn1 ko click karenge wahi same kaam or message print hoga btn1 dabate time jo last me btn1 arrow function diya hoga vahi execute hoga.

// btn1.onclick = () => {
//     console.log("Handler 2");
// };

// div tag ke liye.
let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log("you are inside div");
    console.log(evt);
    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.clientX, evt.clientY);
};


// ## 3). Event Listeners :-
//         --> 1). node.addEventListener(event,callback). 
// ->callback is a type of function when event is perform so it will functioning and execute. event -> onclick,onmouseover.....etc.
// ->callback --> event handler ka kaam karega.
//         --> 2). node.removeEventListener(event,callback)
// -> event listener ko remove bhi kr sakte hain hm -> unko remove karne ka tarika hota hai 2). me dekhi ye.
// -> vahan pr vo callback hota hai jisko hm remove karna chahte hain
// **** #Note :- the callback reference should be same to remove.
// till now --> two event handling methods ->  1).Inline handling method. & 2). Javascript node.event with arrow function method.
// 
// --> benifit of using event listener -> same event pr work karwa sakte hain hm in event listerner.
// --> we can access event-objects in event-Listener.


// event listener 1 
btn1.addEventListener("click", () => {  // evt in () --> (evt).
    // event handler --> callback function.
    console.log("button1 was clicked - handler1");
    // console.log(evt);
    // console.log(evt.target);
    // console.log(evt.type);
    // console.log(evt.clientX, evt.clientY);

});


// event listener 2
btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler2");
});

// event listener 3 
// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler3");
// });

// for removing ke liye variable me store karenge callback function ko.

const handler3 = () => {
    console.log("button1 was clicked - handler3");
};

btn1.addEventListener("click", handler3);

// event listener 4
btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler4");
});

//  me chahta hu event listerner 3 --> handler 3 remove ho jaaye.


// btn1.removeEventListener("click",() => {
//     console.log("button1 was clicked - handler3");
// });


// in dono ki (1).event listener-3 btn1.add(for handler-3) & (2).event listener-3 btn1.remove(for handler-3). dono function memory ke ander alag-alag hain
//  --> jb bhi koi function create hota hai vo apne aap me memory me kuch jagah leta hai.
//  --> f1 and f2 respectively space gain in memory. bhale hi dono ke kaam same hoon ya statement same ho  --> dono alag-alag function hain memory ke ander -> but vo kaam same kr rahe hain.
//  toh ab hm handler 3 ko remove kaise karein --> ? 
// --> the callback reference should be same as remove.
// using as variable. pasing it as variable const handler 3 ... types.

btn1.removeEventListener("click", handler3);

//  ab aaya hai ye same function ke system me  --> add kiya and --> remove kiya same funcrion (f) ko.


// ## Let's Practice :-
// Ques.1). Create a toggle button that changes the screen 
//          to dark-mode when clicked & lighet-mode 
//           when clicked again.
// 
// --> 
// 
// 
// 











