let numbers = [2, 3, 4, 5, 10, 12, 20, 6, 8, 1];

if (numbers.length === 0) {
    console.log("Mảng không có dữ liệu");
} else if (numbers.some(isNaN)) {
    console.log("Dữ liệu không hợp lệ");
} else {
    console.log(sumOfEven(numbers)); 
    console.log(sumOfOdd(numbers)); 
}

function sumOfEven(numbers){
    let totalEven=0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]%2===0){
            totalEven+=numbers[i];
        }
    }
    
    return "toltalEven = "+ totalEven;
}
function sumOfOdd(numbers){
    let totalOdd=0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]%2!==0){
            totalOdd+=numbers[i];
        }
    }
   
    return "totalOdd = "+ totalOdd;
}