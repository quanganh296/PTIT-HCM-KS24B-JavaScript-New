do {let x= parseFloat(prompt("Nhap mot so bat ki: "))
    if (isNaN(x)) {
        alert("Ban vua nhap sai du lieu!");
    }
} while(isNaN(x));

if(x%2==0){
    document.writeln("So ban vua nhap la so chan!");
}
else{
    document.writeln("So ban vua nhap la so le!");
}
