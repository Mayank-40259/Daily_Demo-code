// in this file we practice javascript Questions.

console.log("Hello World");




// Question 1). Create a Guessing Number game. 


let gameNum = 25;
let userNum = prompt("Guess the game number");

while(userNum != gameNum){   //game 
    userNum = prompt("Try it Second Number, Guess Again : ");
    // if(userNum == gameNum){
    //     break;
    // }

}

console.log("Congratulation you guessed the Number : ",userNum);


// Ques 2). :- Template example --> from String to Template (Literals).

let obj={
    item : "pen",
    price : 10,
};

console.log("the cost of", obj.item, " is ", obj.price, "rupees");
let output = `the cost of ${obj.item} is ${obj.price} rupees`;

console.log(output);


let specialString = `This is a template literal ${3 + 2 + 1}`;
console.log(typeof specialString);
console.log(specialString);

// Ques 3). create prompt taking username as input from user to creation of social media account.

// 1).
// let username = prompt("Enter  the user name to continue on SocialMedia Account @ : ");
// let specialusername = `@${username}13`;
// console.log(specialusername);
// console.log("@ "+ username + username.length);

//  2).
let fullname = prompt("Enter the fullname ");
console.log("@"+fullname+fullname.length);

// Ques 4). Prizes of clothes in mall with 40% discount.
// after price with add of clothes --> find ?

let clothes = [250, 600, 300, 900, 50];

console.log(clothes);

// let idx = 0;
// for(let value of clothes){
//    // console.log(`prizes of clothes at ${idx} = is ${value}`);
//    console.log(`prizes of clothes at ${idx} before 40% discount = is ${value}`);
//     idx++;
// }

// let i = 0;
// for(let value of clothes){
//     let offer = value / 40;
//     clothes[i] = clothes[i] - offer;
//     console.log(`prizes of clothes at ${i} after 40% discount = ${clothes[i]}`);
//     i++;
// }

for(let i = 0; i < clothes.length; i++){
    let offer = clothes[i] / 10;
    clothes[i] -= offer;
    console.log(clothes[i]);
}

function myString(str){
    let count = 0;
    for(let char of str){
        if(char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ){
            console.log(char);
            count = count + 1;

        }
    }
    console.log(count);
    return count;
}

let vowel = myString("Mayank Kumar");
console.log(vowel);

//or 


let myArrowfunction = (str1) => {
    let count = 0;
    for(let char of str1){
        if(char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ){
            console.log(char);
            count = count + 1;
        }
    }
    console.log(count);
    return count;
}

let vowel1 = myArrowfunction("Mohit Jadaun");
console.log(vowel1);

// or 

const myArrowFunction = (str2) =>{
    let count = 0;
    for(let char of str2){
        if(char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ){
            console.log(char);
            count = count + 1;
        }

    }
    console.log(count);
    return count;
}

let vowel2 = myArrowFunction("Vipul Tyagi");
console.log(vowel2);



