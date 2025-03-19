let a=parseFloat(prompt("Nhập vào số a: "));
let b=parseFloat(prompt("Nhập vào số b: "));
let operation=prompt("Nhập các phép tính: ");

if(operation==="+"){
    let sum=a+b;
    document.writeln("Kết quả của " + a + " + " + b + " = " + sum);
}else if(operation==="-"){
    let difference=a-b;
    document.writeln("Kết quả của " + a + " - " + b + " = " + difference);
}else if(operation==="*"){
    let product=a*b;
    document.writeln("Kết quả của " + a + " * " + b + " = " + product);
}else if(operation==="/"){
    if(b!=0){
        let quotient=a/b;
        document.writeln("Kết quả của " + a + " / " + b + " = " + quotient);
    }else{
        document.writeln("Số b phải khác 0.");
    }
}else{
    document.writeln("Phép tính bạn nhập không hợp lệ.");
}