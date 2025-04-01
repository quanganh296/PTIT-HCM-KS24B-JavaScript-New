let numbers=[2,3,4,5,10,12,20,6,8,1];
if (numbers.length===0){
    console.log("Mảng không có dữ liệu");
}
if(numbers.some(isNaN)){
    console.log("Dữ liệu không hợp lệ");
}
function isPrimeNumbers(numbers) {
    if (numbers.some(isNaN)) {
        return "Dữ liệu không hợp lệ";
    }
    if (numbers.length === 0) {
        return "Mảng không có dữ liệu";
    }
    let IsPrime = [];
   for (let i = 0; i < numbers.length; i++) {
    let isPrimeNumber = true;
    for (let j = 1; j < numbers[i]; j++) {
        if(numbers[i] % j === 0 && numbers[i] % 2 === 0) {
            isPrimeNumber = false;
        }
}
    if (isPrimeNumber) {
        IsPrime.push(numbers[i]);
    }

    }
    return IsPrime;
}



let result = isPrimeNumbers(numbers);
console.log(result);