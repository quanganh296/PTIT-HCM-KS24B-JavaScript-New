function studentInfo(student){
    let sudentLimit = parseInt(prompt("Nhập số lượng sinh viên cần thêm: "));
    for(let i = 0; i < sudentLimit; i++){
        let name = prompt("Nhập tên sinh viên thứ "+(i+1)+"\n");
        student.push(name); 
    }
}

function studentShow(student) {
    let result = "Danh sách sinh viên:\n";
    for (let i = 0; i < student.length; i++) {
        result += "Sinh viên thứ " + (i + 1) + ": " + student[i] + "\n";
    }
    alert(result);
}
function studentFound(student){
    let name = prompt("Nhập tên sinh viên cần tìm:");
    let index = student.findIndex(item => item === name);
    if(index > -1){
        alert("Sinh viên "+name+" tìm thấy tại vị trí: "+(index+1));
    } else {
        alert("Sinh viên không tìm thấy");
    }
}
function studentDelete(student) {
    let name = prompt("Nhập tên sinh viên cần xóa: ");
    let index = student.findIndex(item => item === name);
    if (index > -1) {
        student.splice(index, 1);
        alert("Sinh viên " + name + " đã được xóa.");
    } else {
        alert("Không tìm thấy sinh viên có tên: " + name);
    }
}
let student = [];
let choice;
do {choice = prompt("==========MENU==========\n"+
    "1. Nhập danh sách sinh viên\n"+
    "2. Hiển thị danh sách sinh viên\n"+
    "3. Tìm sinh viên theo tên\n"+
    "4. Xóa sinh viên khỏi danh sách\n"+
    "5. Thoát\n"+
    "Chọn chức năng: ");
    switch(Number(choice)){
        case 1:
studentInfo(student);
break;
case 2:
studentShow(student);
break;
case 3:
    studentFound(student);
break;

case 4:
    studentDelete(student);
    break;
    case 5:
        alert("Thoát chương trình!");
        break;
default:
    alert("Chức năng không tồn tại");
    break;
 
}
} while(choice!=5);
