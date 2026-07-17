// todo:       Module no - 8.9         topic: (advanced) Logical Not Operator 

const isLoggedIn = false; 

if( isLoggedIn){
    console.log('Add your comment ');
}
else{
    console.log('please login ');
}


// not operator :  যদি true থাকে , তাহলে false হবে। and false থকালে true hobe. ! 
if(!isLoggedIn){
    console.log('logged id complete');
}else{
    console.log('age login koren vai ');
}



// single bang: ! 
const number = true;

if( !number){
    console.log('answer is 10');
}else{
    console.log('answer is not 10');

}

// double bang : !! 
if(number){
    console.log('you are good ');
}else{
    console.log('hello ');
}