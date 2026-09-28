// Ques 1). Create a new button element. Give it a text "click me",
//            background color of red & text color of white.
//   --> Insert the button as the first element inside the body tag.
// 


let newButton = document.createElement("button");
newButton.innerText = "Click me !";
newButton.style.color = "white";
newButton.style.backgroundColor = "red";
console.log(newButton);

document.querySelector("body").prepend(newButton);


// Ques2). Create a <p> tag in html, give it a class & some styling.
//           Now create a new class in CSS and try to append this class to the <p> element.
//--> Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.
// 

let para = document.querySelector("p"); // newCls --> para.


// console.log(newCls);
// newCls.innerText = "I am a Final year BCA Student";
// newCls.style.color = "blue";

// document.querySelector("body").append(newCls);






