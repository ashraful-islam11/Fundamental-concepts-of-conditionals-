// todo:            Module no - 8.7     topic: Nested If-else Condition

const division = 'Dhaka';
// const division = 'Rajshahi';
const zilla ='Natore';
const thana = 'Natore';
const union = 'halsha';
const village = 'jhinapara';
const dad = 'abdullah';
const name ='ashraful';

if(division ==='Rajshahi'){
    console.log('My division name is Rajshahi ');

    if( zilla === 'Natore' ){
        console.log('My zilla natore ');

        if(thana === 'Natore'){
            console.log('thana natore');
            if(union === 'halsha'){
                console.log('union halsha ');
                if(village === 'jhinapara'){
                    console.log('village jhinapara');
                    if(dad=== 'abdullah'){
                        console.log('his dad name is Abdullah');
                        if(name === 'ashraful'){
                            console.log('his name is Ashraful islam ');
                        }
                    }
                }
            }
        }

    }

}else{
    console.log('division Dhaka');
}


// who will do  summer Slam main event and win : 

const player = 'roman';
// const location = 'lossAngeles';
const location = 'london ';
const comeFirst = 'sheth';
const bloodLine =true;

if( location ==='lossAngeles'){
     if(comeFirst ==='sheth'){
        console.log('Sheth rolenes er them song valo hobe ');

        if( bloodLine){
            console.log('roman win the title');
        }else{
            console.log('sheth er chance ache kichu Ta ');
        }

     }else{
        console.log('otc them song best hobe');
     }
}else {
    console.log('this match will one of the best match in summer slam ');
}
