console.log("hello World");


//Ques1). solution :-
// let heading = document.querySelector("h2");
// console.log(heading);
// console.log(heading.innerText);
// heading.innerText = heading.innerText + " from Apna College students";
// console.log(heading.innerText);


// Ques2). solution :-

let boxes = document.querySelectorAll(".box");

// div 0
// console.log(boxes[0]);

        // -->  boxes[0].innerText = "new unique value 1";
// console.log(boxes[0].innerText);

// div 1
// console.log(boxes[1]);
// console.log(boxes[1].innerText);
        // --> boxes[1].innerText = "new unique value 2";
// console.log(boxes[1].innerText);

// div 2 
// console.log(boxes[2]);
// console.log(boxes[2].innerText);
        // --->  boxes[2].innerText = "new unique value 3";
// console.log(boxes[2].innerText);



// Level up : - All time good code.

let idx = 0;
for(div of boxes){
//     console.log(div.innerText);
div.innerText = `new unique value ${idx}`;
idx++;
//ab hm chahe kitni bhi divs de dein toh bhi vahi rahega hamara code loop me for of loop se kiya hai code and kaam ho jayega hamara.
}
