
let count=0;
let count2=0;
let odd=false;
let even=false;
for (let i = 0; i < 5; i++) {
    let number = parseInt(prompt("Nhập số nguyên thứ "+ (i +1) + ":"));
    
    if (isNaN(number)) {
        alert("Vui lòng nhập một số nguyên hợp lệ.");
        i--; 
    } else if (number % 2 !== 0) {
        count++;
        odd = true;
        

    }
    else if (number % 2 === 0 ) {
        count2++;
        even = true;


    }
}
if(odd) {
    console.log("Số lượng các số lẻ là: " + count);
}

if(even) {
    console.log("Số lượng các số chẵn là: " + count2);
}
