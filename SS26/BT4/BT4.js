let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
if (numbers.length===0){
    console.log("Mảng không có dữ liệu");
}
if(numbers.some(isNaN)){
    console.log("Dữ liệu không hợp lệ");
}
function isPrime(number) {
    let isPrime = true;
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}


if (isPrime) {
for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
        console.log(numbers[i]);
    }
}
}
