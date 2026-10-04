// ## Let's Practice :-
// Ques.1). Create a toggle button that changes the screen 
//          to dark-mode when clicked & lighted-mode 
//           when clicked again.
// 
// --> 
//  1).method simple and 2). through access classes from css file.


let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");

// variable 
let currentMode = "light"; //dark.

// event listener
modeBtn.addEventListener("click", () => {
    console.log("you are trying to change mode");
    if(currentMode === "light"){
        currentMode = "dark";
    //   body.style.backgroundColor = "black";
      body.classList.add("dark");
      body.classList.remove("light");

    }else{
        currentMode = "light";
    //   body.style.backgroundColor = "white";
      body.classList.add("light");
      body.classList.remove("dark");

    }

    console.log(currentMode);
});


//  kish event ko hm track kr rahe hain --> click ko jisse hm button ko click kr ke mode ko change kr pa rahe hain.

// Ques.2). mouseover ka use karke jb hm arrow ko box ke upar le jayein toh page ke upar kuch change aaye .
// --> use our creativity to build this. 



