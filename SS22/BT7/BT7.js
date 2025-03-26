let numbers = [2,5,7,4,1,8,6,2,5,7];
let temp;
for(let i = 0; i < numbers.length; i++){
    for(let j = 0; j < numbers.length - i - 1; j++){
        if(numbers[j] > numbers[j+1]){
            temp = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = temp;
        } 
    }
}console.log(numbers);


