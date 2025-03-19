let number=parseInt(prompt("Nhập một số bất kì: "));

if(number%2==0){
    console.log("Không phải là số nguyên tố");
}

else if(number > 1){
    for(var i=2; i<=Math.sqrt(number); i++){
        if(number%i==0){
            console.log("Không phải là số nguyên tố");
            break;
        }
    }
}

else{
    console.log("Là số nguyên tố");
}