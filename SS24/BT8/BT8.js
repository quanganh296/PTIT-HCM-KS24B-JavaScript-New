let str = "";
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập chuỗi ký tự\n" +
        "2. Hiển thị chuỗi ký tự\n" +
        "3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện\n" +
        "4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi\n" +
        "5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi\n" +
        "6. Chuyển đổi chuỗi ký tự thành dạng snake_case\n" +
        "7. Thoát chương trình\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    ));

    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi:");
            break;
        case 2:
            alert("Chuỗi hiện tại: " + str);
            break;
        case 3:
            let words = str.trim().split(/\s+/);
            let wordCountMap = {};
            for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (!wordCountMap[word]) {
                wordCountMap[word] = 1;
            } else {
                wordCountMap[word] += 1;
            }
            }
            let result = "";
            for (let word in wordCountMap) {
            result += word + ": " + wordCountMap[word] + ", ";
            }
            result = result.slice(0, -2); 
            alert("Các từ con trùng lặp và số lần xuất hiện: " + result);
            break;
        case 4:
            let longestWords = str.split(/\s+/);
            let shortestWords = str.split(/\s+/);
            let longestWord = longestWords[0];
            let shortestWord = shortestWords[0];
            for (let i = 1; i < longestWords.length; i++) {
            if (longestWords[i].length > longestWord.length) {
                longestWord = longestWords[i];
            }
            }
            for (let i = 1; i < shortestWords.length; i++) {
            if (shortestWords[i].length < shortestWord.length) {
                shortestWord = shortestWords[i];
            }
            }
            alert("Từ dài nhất trong chuỗi là: " + longestWord);
            alert("Từ nhỏ nhất trong chuỗi là: " + shortestWord);

            break;
        case 5:
            let mostFrequentChar = "";
            let maxCount = 0;
            let charCountMap = {};
            for (let i = 0; i < str.length; i++) {
                let char = str[i];
                if (!charCountMap[char]) {
                    charCountMap[char] = 1;
                } else {
                    charCountMap[char]++;
                }
                if (charCountMap[char] > maxCount) {
                    maxCount = charCountMap[char];
                    mostFrequentChar = char;
                }
            }
            alert("Ký tự xuất hiện nhiều nhất: " + mostFrequentChar + " với " + maxCount + " lần.");
            break;
        case 6:
            let snakeCaseStr = str.replace(/[^\p{L}\s]/gu, "").replace(/\s+/g, "_").toLowerCase();
            alert("Chuyển chuỗi ký tự thành dạng snake_case: " + snakeCaseStr);
            break;
        case 7:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
} while (choice !== 7);