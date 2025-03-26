    let numbersArray = prompt("Nhập một dãy số:");
    let numbers = numbersArray.split('').map(Number);

    let evenSum =0;
    let sumEven=0;
    let oddSum = 0;
    let sumOdd =0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]%2==0){
            evenSum+=numbers[i];
        sumEven= evenSum;
        }
        else{
            oddSum+=numbers[i];
            sumOdd=oddSum;
            
        }
    }
    
    console.log("Tổng các số chẵn: " + sumEven); 
    console.log("Tổng các số lẻ: " + sumOdd);