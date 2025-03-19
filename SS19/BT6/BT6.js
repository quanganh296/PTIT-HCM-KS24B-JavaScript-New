

const a = parseFloat(prompt("Nhập giá trị a: "));
const b = parseFloat(prompt("Nhập giá trị b: "));
const c = parseFloat(prompt("Nhập giá trị c: "));

console.log(a+"x^2" + b+"x" + c +" = 0");

if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            console.log("Phương trình có vô số nghiệm.");
        } else {
            console.log("Phương trình vô nghiệm.");
        }
    } else {
        const x = -c / b;
        console.log("Nghiệm của phương trình là: x = "+ x);
    }
} else {
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
        console.log("Phương trình vô nghiệm.");
    } else if (delta === 0) {
        const x = -b / (2 * a);
        console.log("Phương trình có nghiệm kép: x1 = "+ x + ", x2 ="+ x);
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("Phương trình có hai nghiệm phân biệt: x1 = " +x1+ ", x2 =" +x2);
    }
}