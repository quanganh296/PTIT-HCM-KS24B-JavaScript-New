let n=parseInt(prompt("Nhập một số nguyên bất kì: "));

if(isNaN(n)|| n<=0){
    console.log("Không hợp lệ");
} else{
    let count =0;
    let num=2;
    let result="";
    while(count<n){
        let isPrime = true;
        for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            isPrime=false;
            break;
        }
        }
        if(isPrime){
            result += num + " " ;
            count++;
        }
        num++;
}
console.log(n + " số nguyên tố đầu tiên là: " + result);
}