let numbers=parseFloat(prompt("Nhập một số nguyên bất kì: "));
 console.log("Các ước số của " + numbers + " là: ");
for(let i=0; i<=numbers; i++){
    if(numbers%i==0){
        console.log(i);
    }

}