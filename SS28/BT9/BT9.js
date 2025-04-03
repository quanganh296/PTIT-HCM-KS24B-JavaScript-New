
let bookList=[];
let choice;
do{choice=prompt("==========MENU==========\n"+
    "1.Thêm sách mới.\n"+
    "2. Hiển thị danh sách.\n"+
    "3. Tìm kiếm sách theo tiêu đề.\n"+
    "4. Cập nhật trạng thái mượn/trả sách theo id sách.\n"+
    "5. Xóa sách theo id sách ra khỏi danh sách.\n"+
    "6. Sắp xếp sách theo giá tăng dần.\n"+
    "7. Thoát.\n"+
    "=========================\n"
);
switch(choice){
    case "1":{
        let bookCode=prompt("Nhập mã sách:");
        let bookTitle=prompt("Nhập tên sách:");
        let bookAuthor=prompt("Nhập tên tác giả:");
        let publisherYear=prompt("Nhập năm xuất bản:");
        let bookPrice=prompt("Nhập giá sách:");
        let bookIsAvailable=prompt("Nhập trạng thái sách (true/false):");
            const libraryManagement={
            bookCode: bookCode,
            bookTitle: bookTitle,
            bookAuthor: bookAuthor,
            publisherYear: publisherYear,
            bookPrice: bookPrice,
            bookIsAvailable: bookIsAvailable
        };
        bookList.push(libraryManagement);
        alert("Thêm sách thành công!");
        }
    break;
    case "2":{
        if(bookList.length==0){
            alert("Danh sách trống");

        }
        else{
            let result="";
            for(let i=0;i<bookList.length;i++){
                result+=`Mã sách: ${bookList[i].bookCode} \n` +
                `Tên sách: ${bookList[i].bookTitle} \n` +
                `Tên tác giả: ${bookList[i].bookAuthor} \n` +
                `Năm xuất bản: ${bookList[i].publisherYear} \n` +
                `Giá sách: ${bookList[i].bookPrice} \n` +
                `Trạng thái sách: ${bookList[i].bookIsAvailable} \n` +
                `========================\n`;
            }
            console.log(result);
            alert(result);
            
        }
break;
    }
    case "3":{
        let bookTitle=prompt("Nhập tên sách bạn muốn tìm kiếm:");
        let found=false;
        let result="";
        for(let i=0;i<bookList.length;i++){
            if((bookList[i].bookTitle).includes(bookTitle)){
                result+=`Mã sách: ${bookList[i].bookCode} \n`
                +`Tên sách: ${bookList[i].bookTitle} \n` +
                `Tên tác giả: ${bookList[i].bookAuthor} \n` +
                `Năm xuất bản: ${bookList[i].publisherYear} \n` +
                `Giá sách: ${bookList[i].bookPrice} \n` +
                `Trạng thái sách: ${bookList[i].bookIsAvailable} \n` +
                `========================\n`;
                found=true; 
        }
    }
        if(found){
            alert(result);
        }
        else{
            alert("Không tìm thấy sách nào!");
        }
        break;
    }
    case "4":{
        let bookCode=prompt("Nhập mã sách bạn muốn cập nhật:");
        let found=false;
        let result="";
        for(let i=0;i<bookList.length;i++){
            if(bookList[i].bookCode==bookCode){
                alert("Trạng thái sách hiện tại của sách có mã số "+bookCode+" là: "+bookList[i].bookIsAvailable);
                found=true;
            }
        }
        if(found){
            let newStatus=prompt("Nhập trạng thái sách mới (true/false):");
            for(let i=0;i<bookList.length;i++){
                if(bookList[i].bookCode==bookCode){
                    bookList[i].bookIsAvailable=newStatus;
                    alert("Cập nhật trạng thái sách thành công!");
                }
            }
        }
        
        break;
    }
    case "5":{
        let bookCode=prompt("Nhập mã sách bạn muốn xóa:");
        let found=false;
        let result="";
        for(let i=0;i<bookList.length;i++){
            if(bookList[i].bookCode==bookCode){
                alert("Sách có mã số "+bookCode+" đã được tìm thấy!");
                found=true;
            }
        }
        if(found){
            let comfirmDelete=comfirm("Bạn có chắc muốn xóa sách này không?");
            if(comfirmDelete){
                for(let i=0;i<bookList.length;i++){
                    if(bookList[i].bookCode==bookCode){
                        bookList.splice(i,1);
                        alert("Xóa sách thành công!");
                    }            
                }
            }
        }
        break;
    }
    case "6":{
        bookList.sort((a,b)=>{
            return a.bookPrice-b.bookPrice
        });
        break;
    }
    case "7":{
        alert("Thoát chương trình!");
        break;
    }
    default:{
        alert("Nhập không hợp lệ, vui lòng thử lại.");
    }
}
}while(choice!=7);

