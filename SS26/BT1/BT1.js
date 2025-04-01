let numbers = [12,13,10,2,3,4,7,8,9,11];

if (!Array.isArray(numbers)) {
    console.log("Dữ liệu không hợp lệ");
} else if (numbers.length === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    const filteredNumbers = numbers.filter(num => num >= 10);
    if (filteredNumbers.length > 0) {
        console.log(filteredNumbers.join(", "));
    } else {
        console.log("Không có số nào lớn hơn hoặc bằng 10");
    }
}