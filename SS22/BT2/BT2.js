let userInput = parseInt(prompt("Nhập một số:")); 

let numbers=[2, 5, 7, 4, 1, 8, 6];

if(numbers.includes(userInput)) {
    console.log("bingo");
}
else{
    console.log("Chúc bạn may mắn lần sau");
}