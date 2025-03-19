const numbers= prompt("Nhập vào 3 số bất kì: ").toString();

let num1="",num2="",num3="";
let count =0;

for(let i=0; i<numbers.length; i++){
    if(numbers[i]===" "){
        count++;
        continue;
    }
    if(count===0){
        num1+=numbers[i];
    }
    else if(count===1){
        num2+=numbers[i];
    }
    else{
        num3+=numbers[i];
    }
}

num1= Number(num1);
num2= Number(num2);
num3= Number(num3);

const max= Math.max(num1, num2, num3);

console.log("Số lớn nhất trong 3 số là: "+ max);