    // #1(statikurad rom miweria ricxvebis jami ar vici ramdenad sworia)

let numbers = [ age = 2 , mothersAge = 4 , brothersAge = 6 , fathersAge = 8 , myAge = 10];
console.log( numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]);
    // #2
let info = [
    person1 ={
        firstName : 'niko',
        age : 13,
        address : 'vazha-pshavela'
    },
    person2 ={
        firstName : 'lasha',
        age : 19,
        address : 'vazha-pshavela'
    },
    person3 ={
        firstName : 'mamuka',
        age : 40,
        address : 'vazha-pshavela'
    }
];

    // #3
console.log(`my name is ${info[0].firstName} , my age is ${numbers[0]} , my address is ${info[0].address}`);
    // #4
if(info[2].age <= 19){
    console.log('i am a teenager')
}
else{
    console.log('i am an adult')
}
    // #5
let oddNumbers =[ 3,5,9,247,19,]
for(let items in oddNumbers){
    console.log(oddNumbers[items])
}
    // #6
const currentDay = new Date().getDay();
switch(currentDay){
    case 0:
        getDay = 'Sunday';
    case 1:
        getDay = 'Monday';
    case 2:
        getDay = 'Tuesday';
    case 3:
        getDay = 'Wednesday';
    case 4:
        getDay = 'Thursday';
    case 5:
        getDay = 'Friday';
    case 6:
        getDay = 'Saturday';
}