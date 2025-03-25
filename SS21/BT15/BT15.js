let amount = parseInt(prompt("Nhập số tiền cần rút (phải chia hết cho 1.000):"));

if (isNaN(amount) || amount <= 0 || amount % 1000 !== 0) {
    console.log("Số tiền không hợp lệ. Vui lòng nhập số tiền có thể chia hết cho 1000.");
} else {
    const denominations = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000];
    console.log(`Số tiền cần rút: ${amount.toLocaleString()} VND`);
    console.log("Kết quả:");

    for (let i = 0; i < denominations.length; i++) {
        let count = Math.floor(amount / denominations[i]); 
        if (count > 0) {
            console.log(`${denominations[i].toLocaleString()} - ${count} tờ`);
            amount -= count * denominations[i]; 
        }
    }
}