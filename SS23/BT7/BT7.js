
let n = parseInt(prompt("Nhập số lượng phần tử trong mảng: "));
if ( n < 0) {
    alert("Số lượng phần tử không được nhỏ hơn 0");

}
else if(n===0){
    alert("Mảng không có phần tử nào");    
}
 else {
    let numbers = [];
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + " của mảng: "));
       
            numbers.push(num);
    }

    let maxNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }


    let secondMax = null;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== maxNumber) {
            if (secondMax === null || numbers[i] > secondMax) {
                secondMax = numbers[i];
            }
        }
    }


    if (secondMax === null) {
        console.log("Không có số lớn thứ 2 trong dãy số.");
    } else {
        console.log(secondMax + " là số lớn thứ 2 trong dãy số.");
    }
}