
let a = parseFloat(prompt("Nhập độ dài cạnh a:"));
let b = parseFloat(prompt("Nhập độ dài cạnh b:"));
let c = parseFloat(prompt("Nhập độ dài cạnh c:"));

if (a + b > c && b + c > a && c + a > b) {
    console.log("Đây là một tam giác hợp lệ.");
    
    if (a === b && b === c) {
        console.log("Đây là tam giác đều.");
    } else if (a === b || b === c || c === a) {
        if (Math.abs(a*a + b*b - c*c) < Number.EPSILON || 
            Math.abs(b*b + c*c - a*a) < Number.EPSILON || 
            Math.abs(c*c + a*a - b*b) < Number.EPSILON) {
            console.log("Đây là tam giác vuông cân.");
        } else {
            console.log("Đây là tam giác cân.");
        }
    } else if (Math.abs(a*a + b*b - c*c) < Number.EPSILON || 
               Math.abs(b*b + c*c - a*a) < Number.EPSILON || 
               Math.abs(c*c + a*a - b*b) < Number.EPSILON) {
        console.log("Đây là tam giác vuông.");
    } else {
        console.log("Đây là tam giác thường.");
    }
} else {
    console.log("Ba cạnh đã cho không tạo thành một tam giác hợp lệ.");
}