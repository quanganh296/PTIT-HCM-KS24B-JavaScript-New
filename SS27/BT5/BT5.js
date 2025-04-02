function splitArray(arr, n) {
    if (!Array.isArray(arr) || n <= 0 || !(n % 1 === 0)) {
        return "dữ liệu không hợp lệ";
    }

    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    
    return result;
}


console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); 
console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8], 2)); 
console.log(splitArray("abc", 3));                  
