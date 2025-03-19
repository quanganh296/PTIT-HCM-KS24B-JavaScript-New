const soDict = {
    0: "Khong",
    1: "Mot",
    2: "Hai",
    3: "Ba",
    4: "Bon",
    5: "Nam",
    6: "Sau",
    7: "Bay",
    8: "Tam",
    9: "Chin"
};

let n = parseInt(prompt("Nhap so tu 0 den 9: "), 10);
let ketQua = "";

if (n >= 0 && n <= 9) {
    let number = n % 10;
    
 if (number > 0) {
        ketQua += soDict[number];
    }
    
    alert(ketQua);
} else {
    alert("So khong hop le");
}
