
let n = parseInt(prompt("Nhập vào số lượng số Fibonacci cần hiển thị:"));

if (isNaN(n) || n <= 0) {
    console.log("Không hợp lệ");
} else {
    let fib1 = 1, fib2 = 1; 
    let result="";

    for (let i = 1; i <= n; i++) { 
      if(i===1){
        result += fib1;
      }
      else if(i===2){
        result += " " + fib2;
      }
      else{
        let nextFib = fib1 + fib2;
        result += " " + nextFib;
        fib1 = fib2;
        fib2 = nextFib;
      }
    }

    console.log("Dãy Fibonacci: " + result);
}