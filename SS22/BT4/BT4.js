let numbersArray = prompt("Nhập một dãy số:");
let numbers = numbersArray.split('').map(Number);

let isValid= true;
for(let i=0; i<numbers.length; i++) {
    if(isNaN(numbers[i])) {
        isValid = false;
        break;
    }
}

if(!isValid){
    console.log("Dãy không hợp lệ");
}
else{
    let maxNumber= numbers[0];
for(let i=1; i<numbers.length; i++){
    if(numbers[i]>maxNumber){
        maxNumber=numbers[i];
    }
}
console.log(maxNumber + " là số lớn nhất trong dãy số");
}