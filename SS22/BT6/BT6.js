let numbers = [2,5,7,4,1,8,6,2,5,7];
let count=0;
let input=parseInt(prompt("Nhập một số trong dãy(2,5,7,4,1,8,6,2,5,7): "));
for(let i=0; i<numbers.length; i++){
if(input==numbers[i]){
    count++;
}

}

if(!count){
    console.log("Số " + input + " không tồn tại trong mảng.");
}

else{
    console.log("Số " + input + " xuất hiện " + count + " lần trong mảng.");
}
