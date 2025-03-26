let numbers = new Array();
let numbersArray = prompt("Nhập một dãy số:");

if (isNaN(numbersArray)) {
    console.log("Dãy không hợp lệ");
}else{

    for (let i = numbersArray.length - 1; i >= 0; i--) {
        numbers.push(parseInt(numbersArray[i]));
    }

    console.log("Dãy số đã đảo ngược: ", numbers);
}
