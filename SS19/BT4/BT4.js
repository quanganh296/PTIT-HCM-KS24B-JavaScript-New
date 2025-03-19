let x =parseInt(prompt("Nhập một số bất kì: "));

if((x%3==0 )&&(x%5==0)){
    document.writeln("Số " + x + " chia hết cho cả 3 và 5.");
}
else {
    document.writeln("Số " + x + " không chia hết cho cả 3 và 5.");
}