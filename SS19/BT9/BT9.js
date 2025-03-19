let result;

result = "javascript" + 5;
console.log("Kết quả: " + result); 
// Kết quả: "javascript5"
// Giải thích: Toán tử "+" khi sử dụng với chuỗi sẽ thực hiện phép nối chuỗi. 
// Chuỗi "javascript" được nối với số 5, tạo thành "javascript5".

result = "javascript" - 1;
console.log("Kết quả: " + result); 
// Kết quả: NaN
// Giải thích: Toán tử "-" không thể áp dụng cho chuỗi không phải số. 
// Chuỗi "javascript" không thể chuyển đổi thành số, nên kết quả là NaN (Not a Number).

result = "3" + 2;
console.log("Kết quả: " + result); 
// Kết quả: "32"
// Giải thích: Toán tử "+" khi sử dụng với chuỗi sẽ thực hiện phép nối chuỗi. 
// Chuỗi "3" được nối với số 2, tạo thành "32".

result = "5" - 4;
console.log("Kết quả: " + result); 
// Kết quả: 1
// Giải thích: Toán tử "-" cố gắng chuyển đổi chuỗi "5" thành số. 
// Sau đó thực hiện phép toán 5 - 4, kết quả là 1.

result = isNaN("123");
console.log("Kết quả: " + result); 
// Kết quả: false
// Giải thích: Phương thức `isNaN` kiểm tra xem giá trị có phải là NaN hay không. 
// Chuỗi "123" có thể chuyển đổi thành số, nên kết quả là false.

result = isNaN("hello");
console.log("Kết quả: " + result); 
// Kết quả: true
// Giải thích: Chuỗi "hello" không thể chuyển đổi thành số, nên `isNaN` trả về true.

result = Number.isNaN("123");
console.log("Kết quả: " + result); 
// Kết quả: false
// Giải thích: Phương thức `Number.isNaN` kiểm tra xem giá trị có phải là NaN hay không. 
// Chuỗi "123" không phải là NaN, nên kết quả là false.

result = Number.isNaN(NaN);
console.log("Kết quả: " + result); 
// Kết quả: true
// Giải thích: Phương thức `Number.isNaN` kiểm tra xem giá trị có phải là NaN hay không. 
// Giá trị `NaN` chính là NaN, nên kết quả là true.