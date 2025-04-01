function filterLongStrings(array) {
    if (!Array.isArray(array)) {
        return "Dữ liệu không hợp lệ";
    }

    if (array.length === 0) {
        return "Mảng không có phần tử nào";
    }

    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 5) {
            result.push(array[i]);
        }
    }

    return result;
}


console.log(filterLongStrings(["apple", "banana", "cat", "elephant", "dog"])); // ["banana", "elephant"]
console.log(filterLongStrings([]));
console.log(filterLongStrings("abc"));