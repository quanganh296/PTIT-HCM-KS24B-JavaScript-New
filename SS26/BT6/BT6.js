function formatDates(dates) {
    if (!Array.isArray(dates)) {
        return "Dữ liệu không hợp lệ";
    }

    if (dates.length === 0) {
        return "Mảng không có phần tử nào";
    }

    let formattedDates = [];
    for (let i = 0; i < dates.length; i++) {
        let dateParts = dates[i].split("-");
        if (dateParts.length === 3) {
            let formattedDate = dateParts[2] + "/" + dateParts[1] + "/" + dateParts[0];
            formattedDates.push(formattedDate);
        }
    }

    return formattedDates;
}

console.log(formatDates(["2025-03-10", "2024-12-25", "2023-07-01"])); 
console.log(formatDates([])); 
console.log(formatDates("abc"));