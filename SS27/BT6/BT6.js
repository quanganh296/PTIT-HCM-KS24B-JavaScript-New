function isArithmeticSequence(array) {
    if (array.length < 2) {
        return false; 
    }

    let difference = array[1] - array[0];

    for (let i = 1; i < array.length - 1; i++) {
        if (array[i + 1] - array[i] !== difference) {
            return false; 
        }
    }

    return true; 
}


let input = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy:");
let array = input.split(",").map(Number); 

if (array.some(isNaN)) {
    alert("Dữ liệu không hợp lệ");
   
}
else if (isArithmeticSequence(array)) {
    alert("TRUE");
} else {
    alert("FALSE");
}