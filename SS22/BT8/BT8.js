let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let showCount ={};

for (let i = 0; i < numbers.length; i++){
    let num= numbers[i];
    if(showCount[num]){
        showCount[num]++;
    }else{
        showCount[num]=1;
    }
}

let maxShowCount=0;
let mostShowCount=null;

for(let num in showCount){
    if(showCount[num]>maxShowCount ||
      (showCount[num] == maxShowCount && parseInt(num)< mostShowCount)
    ){
        maxShowCount=showCount[num];
        mostShowCount=parseInt(num);
    
}
}
console.log(mostShowCount);