function circleArea(radius){
    return Math.PI * Math.pow(radius, 2);
}
function circlePerimeter(radius){
    return 2 * Math.PI * radius;
}
function rectangleArea(a,b){
    return a * b;
}
function rectanglePerimeter(c,d){
    return 2 * (c + d);
}
let radius;
let choice;
do {
    choice =Number(prompt("==========MENU==========\n"+
        "1. Tính diện tích hình tròn.\n"+
        "2. Tính chu vi hình tròn.\n"+
        "3. TÍnh diện tích hình chữ nhật.\n"+
        "4. Tính chu vi hình chữ nhật.\n"+
        "5. Thoát chương trình.\n"+
        "Chọn một option: "
    ));
    switch(choice){
        case 1:
            radius = parseFloat(prompt("Nhập bán kính hình tròn: "));
            alert("Diện tích hình tròn: " + circleArea(radius));
            break;
        case 2:
            radius = parseFloat(prompt("Nhập bán kính hình tròn: "));
            alert("Chu vi hình tròn: " + circlePerimeter(radius));
            break;
            case 3:
                let a = parseFloat(prompt("Nhập chiều dài hình chữ nhật: "));
                let b = parseFloat(prompt("Nhập chiều rộng hình chữ nhật: "));
                alert("Diện tích hình chữ nhật: " + rectangleArea(a,b));
                break;
            case 4:
                let c = parseFloat(prompt("Nhập chiều dài hình chữ nhật: "));
                let d = parseFloat(prompt("Nhập chiều rộng hình chữ nhật: "));
                alert("Chu vi hình chữ nhật: " + rectanglePerimeter(c,d));
                break;
            case 5:
                alert("Thoát chương trình");
                break;
            default:
                alert("Vui lòng chọn lại");
                break;
    }

}while(choice != 5);
