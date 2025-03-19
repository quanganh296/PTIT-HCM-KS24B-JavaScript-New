let month=parseInt(prompt("Nhập vào một tháng bất kì: "));
let day
    switch(month){
        case 2:
            day=28;
            console.log("tháng "+ month + " có " + day + " ngày hoặc 29 ngày năm nhuận ");
            break;
        case 4:
            day=30;
            console.log("tháng "+ month + " có " + day + " ngày ");
            break;
        case 6:
            day=30;
            console.log("tháng "+ month + " có " + day + " ngày ");
            break;
        case 9:
            day=30;
            console.log("tháng "+ month + " có " + day + " ngày ");
            break;
        case 11:
            day=30;
            console.log("tháng "+ month + " có " + day + " ngày ");
            break;
            case 1:
                day=31;
            console.log("tháng "+ month + " có " + day + " ngày ");
            break;
            case 3:
                day=31;
            console.log("tháng "+ month + " có " + day + " ngày ");
            break;
            case 5:
                day=31;
            console.log("tháng "+ month + " có " + day + " ngày ");
            break;
            case 7:
                day=31;
            console.log("tháng "+ month + " có " + day + " ngày ");
            break;
            case 8:
                day=31;
            console.log("tháng "+ month + " có " + day + " ngày ");
            break;
            case 10:
                day=31;
            console.log("tháng "+ month + " có " + day + " ngày ");
            break;
            case 12:
                day=31;
            console.log("tháng "+ month + " có " + day + " ngày ");
            break;
        default:
            console.log("Tháng không hợp lệ");
           
    }