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