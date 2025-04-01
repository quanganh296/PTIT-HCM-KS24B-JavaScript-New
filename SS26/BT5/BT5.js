let numbers=[10,9,5,11,24,3,2,6,7];
if (numbers.length===0){
    console.log("Mảng không có dữ liệu");
}
if(numbers.some(isNaN)){
    console.log("Dữ liệu không hợp lệ");
}
let max = numbers[0];
let maxPositions = []; 
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("Max value:", max);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === max) {
        maxPositions.push(i); 
}

}console.log("Max positions:", maxPositions.join(","));
