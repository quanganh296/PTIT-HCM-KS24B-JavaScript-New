let n;
do{
 n = parseInt(prompt("Nhập độ dài mảng:"));

if (n === 0) {
    alert("Mảng không có phần tử");
}
else if(n<0){
    alert("Số lượng phần tử không được âm");
}
}while(n <=0 );
    let inputArray = [];
    let numericCharacters = []; 
   let sum=0;
    for (let i = 0; i < n; i++) {
        inputArray.push(prompt(`Nhập phần tử thứ ${i + 1}:`));
    }

    for (let i = 0; i < n; i++) {
        if (!isNaN(inputArray[i])) {
            numericCharacters.push(inputArray[i]);
            sum += parseFloat(inputArray[i]);
        }
    }

    if (numericCharacters.length > 0) {
        alert("Các ký tự số trong mảng: " + numericCharacters.join(", "));
        console.log("Các ký tự số trong mảng: " + numericCharacters.join(", "));
        alert("Tổng các ký tự số: " + sum);
        console.log("Tổng các ký tự số: " + sum);
    } else {
        alert("Không có phần tử nào là số");
        console.log("Không có phần tử nào là số");
    }
    
