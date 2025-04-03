let employees = [];
let choice;
do{
choice = prompt("Nhập chức năng bạn muốn thực hiện:\n1. Thêm nhân viên\n2. Xóa nhân viên\n3. Cập nhật mức lương nhân viên theo id\n4. Tìm kiếm nhân viên theo tên\n5. Thoát chương trình");
switch(choice){
    case '1':{
        let id= prompt("Nhập id của nhân viên: ");
let employeeName= prompt("Nhập tên của nhân viên: ");
let position= prompt("Nhập chức vụ của nhân viên: ");
let salary= prompt("Nhập lương của nhân viên: ");

if(!id || !employeeName || !position || !salary){
    alert("Vui lòng nhập đầy đủ thông tin nhân viên!");
}
else if(employees.some(emp=>emp.id === id)){
    alert("Id nhân viên đã tồn tại! Vui lòng nhập id khác!");
}
const addEmployer={
    id: id,
    name: employeeName,
    position: position,
    salary: salary

}
employees.push(addEmployer);
        alert("Thêm nhân viên thành công!");

}
        break;
    case '2':{
     let id= prompt("Nhập id của nhân viên: ");
   let found = false;
 
   if (id) {
      
       const index = employees.findIndex(emp => emp.id === id);
       if (index !== -1) {
        alert(`Tìm thấy nhân viện có ${id} xác nhận người dùng muốn xóa nhân viên hay không?`);
        if (confirm("Bạn có chắc chắn muốn xóa nhân viên này không?")) {
    
           found = true;}
       } else {
           alert("Không tìm thấy nhân viên với id này!");
       }
         if (found) {
            employees.splice(index, 1);
            alert("Nhân viên đã được xóa!");
            }
            else{
                alert("Người dùng đã hủy xóa nhân viên!");
            }
         }

   
}

        break;
    case '3':{
        let id= prompt("Nhập id của nhân viên: ");
        let newSalary= prompt("Nhập mức lương mới của nhân viên: ");
        let found = false;
        if(id){
            const updateSalary=employees.find(emp=> emp.id === id);
            if(updateSalary){
                updateSalary.salary=newSalary;
                found=true;
                alert("Cập nhật mức lương thành công!");
            }
        }
    }
        break;
    case '4':
       {
        let searchEmployer= prompt("Nhập tên nhân viên bạn muốn tìm kiếm: ");
        let found = false;
        if(searchEmployer){
            const search=employees.filter(emp=>emp.name.includes(searchEmployer));
            if(search.length>0){
                found=true;
                search.forEach(emp=>{
                    alert("Danh sách nhân viên tìm thấy: \n"+`ID: ${emp.id}, Tên: ${emp.name}, Chức vụ: ${emp.position}, Lương: ${emp.salary}`);
                });
            }
            if(!found){
                alert("Không tìm thấy nhân viên với tên này!");
            }
        }
       }
        break;
    case '5':{
        alert("Bạn đã thoát chương trình!");
    }
        break;
    default:
        alert("Chức năng không hợp lệ! Vui lòng chọn lại.");
}






}while(choice!= 5);