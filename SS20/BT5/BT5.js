let a=parseFloat(prompt("Nhập số a: "));
let b=parseFloat(prompt("Nhập số mũ b của a: "));

let result=Math.pow(a,b);

if(isNaN(a)||isNaN(b)){
    console.log("Không hợp lệ");

}

else{
    console.log(result);
}