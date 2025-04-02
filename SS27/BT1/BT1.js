let choice;
let sum=0,hieu=0,tich=0,thuong=0;
   do{ choice=prompt("==========MENU==========\n"+
    "1. Cộng hai số.\n"+
    "2. Trừ hai số.\n"+
    "3. Nhân hai số.\n"+
    "4. Chia hai số.\n"+
    "5. Thoát.\n"+
    "Hãy chọn 1 trong các option: ");
    switch(Number(choice)){
        case 1:
            let num1=parseFloat(prompt("Nhập số thứ 1: "));
            let num2=parseFloat(prompt("Nhập số thứ 2: "));
            sum=num1+num2;
            alert("Tổng của 2 số là: "+ sum);
            break;
        case 2:
            let num3=parseFloat(prompt("Nhập số thứ 1: "));
            let num4=parseFloat(prompt("Nhập số thứ 2: "))
     hieu=num3-num4;
         alert("Hiệu của 2 số là: "+hieu);
        break;
        case 3:
            let num5=parseFloat(prompt("Nhập số thứ 1: "));
            let num6=parseFloat(prompt("Nhập số thứ 2: "));
            tich=num5*num6;
            alert("Tích của 2 số là: "+tich);
            break;
        case 4:
            let num7=parseFloat(prompt("Nhập số thứ 1: "));
            let num8=parseFloat(prompt("Nhập số thứ 2: "));
            if(num8!=0){
                thuong=num7/num8;
                alert("Thương của 2 số là: "+thuong);
            }else{
                alert("Số thứ 2 phải khác 0.");
            }
            break;
        case 5:
            alert("Thoát chương trình!");
            break;
        default:
            alert("Chọn sai! Vui lòng chọn lại.");
    }
}while(choice!=5);