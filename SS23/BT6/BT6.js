let falsy = ["0", "false", "undefined", "null", "NaN", ""];
let numericCharacters = [];

let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));

for (let i = 0; i < n; i++) {
    let value = prompt(`Nhập phần tử thứ ${i + 1}:`);
    
    if (!falsy.includes(value.toLowerCase())&& value != '""') {
        numericCharacters.push(value);
    }
}

if (numericCharacters.length > 0) {
    alert(numericCharacters.join(", "));
    console.log(numericCharacters);
}