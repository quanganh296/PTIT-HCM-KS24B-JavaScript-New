let arr=[];
let n; 
let count=0;
do{
    n = parseInt(prompt("Nhập số lượng phần tử cho mảng: "));

    if(n === 0){
        alert("Mảng không có phần tử");
    }
    else if(n < 0){
        alert("Số lượng phần tử không hợp lệ");
    }
} while(n <= 0); 

for(let i = 0; i < n; i++){
    let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + " của mảng: "));
    arr.push(num);
   if(arr[i]<0){
    count++;

   }

}
alert(count);
console.log(arr);
console.log(count);
