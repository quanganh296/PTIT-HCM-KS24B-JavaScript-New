let numbers = []; 
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n" +
        "4. Tính tổng các phần tử trong mảng\n" +
        "5. Tìm số lần xuất hiện của một phần tử trong mảng\n" +
        "6. Sắp xếp mảng tăng dần\n" +
        "7. Thoát chương trình\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    ));

    switch (choice) {
        case 1:
            numbers = [];
            let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
            for (let i = 0; i < n; i++) {
                let num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
                numbers.push(num);
            }
            alert("Đã nhập xong mảng.");
            break;

        case 2:
            if (numbers.length === 0) {
                alert("Mảng hiện đang trống.");
            } else {
                alert("Các phần tử trong mảng: " + numbers.join(", "));
            }
            break;

        case 3:
            if (numbers.length === 0) {
                alert("Mảng hiện đang trống.");
            } else {
                let max = numbers[0];
                let min = numbers[0];
                for (let i = 1; i < numbers.length; i++) {
                    if (numbers[i] > max) max = numbers[i];
                    if (numbers[i] < min) min = numbers[i];
                }
                alert("Giá trị lớn nhất: " + max + "\nGiá trị nhỏ nhất: " + min);
            }
            break;
        case 4:
            let sum=0;
            for (let i = 0; i < numbers.length; i++) {
                
                    sum += numbers[i];
                
            }
            alert("Tổng các phần tử trong mảng: " + sum);
            break;

           

        case 5:
            let searchNum = parseInt(prompt("Nhập một số trong mảng:"));
            let count = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] === searchNum) {
                    count++;
                }
            }
            alert(`Số ${searchNum} xuất hiện ${count} lần trong mảng.`);
            break;

        case 6:
            for(let i = 0; i < numbers.length; i++){
                for(let j = 0; j < numbers.length - i - 1; j++){
                    if(numbers[j] > numbers[j+1]){
                        temp = numbers[j];
                        numbers[j] = numbers[j+1];
                        numbers[j+1] = temp;
                    } 
                }
            }console.log(numbers);
            
            
 break;            

        case 7:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
} while (choice !== 7);