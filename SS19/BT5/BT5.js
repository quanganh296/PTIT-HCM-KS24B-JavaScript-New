let inputString =prompt("Hãy nhập chuỗi bất kì: ");
let containsSpace = false;

for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === ' ') {
        containsSpace = true;
        break;
    }
}

if (containsSpace) {
    console.log("Chuỗi có chứa dấu cách.");
} else {
    console.log("Chuỗi không chứa dấu cách.");
}