const num = [1, 2, 3, 4];
const anotharr = [2, 4, 6];
//  let sum = 0;
//  for (let i = 0; i < arr.length; i++) {
//      sum += arr[i];

//  }

// console.log(sum);

//SUM OF NUMBERS
function sumofarr(arr){
    let sum = 0;
 for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
 } 
 console.log(sum)
}
// sumofarr(anotharr)


//AVERAGE

function sumofaverage(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } 
    let average = sum / arr.length
 console.log(average)
}

sumofaverage(num)

function stringsLongerThan(stringArray, num){
    for(let i = 0; i <= stringArray.length; i++); {

    }
    
}
clearInterval


let starting = 0;
function recursionNumber(n){

starting +=1

if (starting >= n){
    console.log(starting)

} else {
    console.log(starting)
    recursionNumber(n)
}
}

recursionNumber(10)


