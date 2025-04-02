function sortEvenNumber(array) {
   
    let evenNumbers = array.filter(num => num % 2 === 0).sort((a, b) => a - b);

   
    let evenIndex = 0;
    return array.map(num => {
        if (num % 2 === 0) {
            return evenNumbers[evenIndex++];
        }
        return num; 
    });
}


let input = prompt("Nhập một dãy số nguyên, cách nhau bởi dấu phẩy:");
let array = input.split(",").map(Number); 


if (array.some(isNaN)) {
    alert("Dữ liệu không hợp lệ");
} else {
    let result = sortEvenNumber(array);
    alert("Mảng sau khi sắp xếp: " + result.join(", "));
}