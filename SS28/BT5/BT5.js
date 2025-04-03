const company = {
    name:"RikkeiSoft",
    location:"Hà Nội",
    employees:[
        {name:"Nguyễn Quang Anh", position:"Developer"},
        {name:"Võ Duy Nguyễn", position:"Tester"},
        {name:"Vũ Đăng Nguyên ", position:"Manager"},
    ]
};

console.log(company.name);

console.log(company.location);  
company.employees.forEach(employee=> {
    console.log("\n"+employee.name+":"+employee.position);
});