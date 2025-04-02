function numberLists(numbers, n){
    for(let i = 0; i < n; i++){
        numbers.push(Number(prompt("Nhap phan tu thu " + (i + 1) + ": ")));
    }
    console.log(numbers);
}
function numbersAveraged(numbers){
    let average =0;
    for(let i = 0; i < numbers.length; i++){
        average += numbers[i];
    }
    average /= numbers.length;
    alert("Trung bình của các số: "+ average);
}
function biggestEvenNumber(numbers){
    let maxEven = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0 && numbers[i] > maxEven){
            maxEven = numbers[i];
        }
    }
    alert("Số chẵn lớn nhất: "+ maxEven);
}
function smallestOddNumber(numbers){
    let minOdd = 0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2!=0 && numbers[i] < minOdd){
            minOdd = numbers[i];
        }

    }
    alert("Số lẻ nhỏ nhất: "+ minOdd);
}
let numbers = [];
let choice;
do {
    choice = Number(parseInt(prompt("==========Menu==========\n" +
        "1. Nhập danh sách số nguyên\n" +
        "2. Tính trung bình các số\n" +
        "3. Tìm số chẵn lớn nhất\n" +
        "4. Tìm số lẻ nhỏ nhất\n" +
        "5. Thoat\n" +
        "Chon mot so trong menu:")));
        switch(choice){
            case 1:
                let n = Number(prompt("Nhap so phan tu cua danh sach:"));
                numberLists(numbers, n);
                break;
            case 2:
                numbersAveraged(numbers);
                break;
            case 3:
                biggestEvenNumber(numbers);
            break;
            case 4:
                smallestOddNumber(numbers);
                break;
            case 5:
                alert("Thoat chuong trinh");
                break;
            default:
                alert("Lua chon khong hop le");
                break;
        }
              

}while(choice !=5);
