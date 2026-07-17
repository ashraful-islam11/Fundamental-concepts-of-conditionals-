// todo:       Module no - 8.8             topic:  If-else Shorthand Ternary Operator. 

// structure of ternary operator: condition ? true : false ;

// normal if else : 

let prise = 500;
const leader = false;

if(leader === true){
    prise = 0;
}
else{
    prise =prise + 100;
}
console.log('now prise is :',prise , 'taka');


// same work , but kom code : ternary operator do less code .

let discount = 5 ;
const vairal = true;

discount = vairal ? "vairal person er jonno 50% discount": "normal public er jonno 5% discount";
console.log(discount);

// normal if else : 
let age = 17;
if(age === 18){
    console.log('you are adult , and you can go to vote');
}else{
    console.log("you are not adult, and you can't go to vote ");
}


// ternary operator: 

age = age>= 18 ? 'Ashraful is Adult' : 'Ashraful is not a Adult';
console.log(age);




const worldCupTicket = 1000;
const worldCupDiscount = 30;
const spanScore =2;
const firstTeam = 'span';


if( firstTeam === 'span'){
    console.log('span is first team of 2026 world cup of final team');
     if(spanScore === 2){
        console.log('lamin yamal is win the world cup toffy 🏆');
     }
     else{console.log('lionel messi 😢');}
}
else{
    console.log('Argentina is first finalist team of 2026 world cup ');
}


// ternary operator: 

let worldCupToffy = (firstTeam === 'span') ?  "Span is the fist finalist team of 2026 world cup ✅ ":"Argentina is first first finalist team of 2026 world cup  ";

console.log(worldCupToffy);


