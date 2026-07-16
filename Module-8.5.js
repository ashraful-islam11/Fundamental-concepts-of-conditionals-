// todo:   Module no - 8.5             topic: Multiple Condition Logical Operators (&& and ||)

// multiple condition : 
const salary = 25000;
const isBCS = false;
const flat = true;
const car = false; 
const isDindar = true;

if(salary >= 30000){
    console.log('cole motamuti .');
}else{
    console.log('reject , bari cole jao .');
}

 if(isBCS === true){
    console.log('Raji ache biye te ');
}else{
    console.log('BCS na hole colbe na . vai tumi age bcs dao ,tarpore biye korte asho ');
}


// dindar family  : multiple condition: and operator : &&. (all condition true hote hobe. )

if (isDindar=== true && flat === true){
    console.log('cher nam mokbul , meye bollo kobul ');
}else{
    console.log('meyer baba biye dite raji na. ');
}


// and operator && or operator || 

if(salary >= 20000 && car === true || (isDindar === true && flat === true)){
    console.log('All members happy in this family , so bajao sanai , start is marriage');
}else{
    console.log('Allah er kache doya kori biye ta je tor hoye jay.');
}



