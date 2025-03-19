
let hours = parseInt(prompt("Nhập giờ (0-23):"));
let minutes = parseInt(prompt("Nhập phút (0-59):"));
let seconds = parseInt(prompt("Nhập giây (0-59):"));


if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
    console.log("Giờ, phút hoặc giây không hợp lệ. Vui lòng nhập lại.");
} else {

    let period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; 

  
    let formattedHours = hours.toString().padStart(2, '0');
    let formattedMinutes = minutes.toString().padStart(2, '0');
    let formattedSeconds = seconds.toString().padStart(2, '0');


    let timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${period}`;

 
    console.log("Thời gian trong định dạng 12 giờ là:", timeString);
}