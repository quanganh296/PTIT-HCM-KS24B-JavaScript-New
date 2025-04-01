let numbers=[2,3,4,5,10,12,20,6,8,1];
if (numbers.length===0){
    console.log("Mảng không có dữ liệu");
}
if(numbers.some(isNaN)){
    console.log("Dữ liệu không hợp lệ");
}
function evenNumbers(numbers) {
    if (numbers.some(isNaN)) {
        return "Dữ liệu không hợp lệ";
    }
    if (numbers.length === 0) {
        return "Mảng không có dữ liệu";
    }
    let evenSquares = [];
    for (let i = 0; i < numbers.length; i++) {
        let squared = Math.pow(numbers[i], 2);
        if (squared % 2 === 0) {
            evenSquares.push(squared);
        }
    }
    return evenSquares;
}
let result = evenNumbers(numbers);
console.log(result);