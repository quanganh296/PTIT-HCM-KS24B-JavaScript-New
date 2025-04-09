
const initialEmployees = [
    { id: 1, name: "Nguyễn Văn A", position: "Developer" },
    { id: 2, name: "Trần Thị B", position: "Designer" },
    { id: 3, name: "Phạm Văn C", position: "Project Manager" },
    { id: 4, name: "Lê Thị D", position: "QA Engineer" },
    { id: 5, name: "Vũ Văn E", position: "DevOps" },
    { id: 6, name: "Hoàng Thị F", position: "HR Manager" },
    { id: 7, name: "VÕ Duy Nguyễn", position: "Trùm chiếu" },
    { id: 8, name: "Vũ Đăng Nguyên", position: "Gayy" },
    { id: 9, name: "Nguyễn Gia Huy", position: "Bị béo" },
    { id: 10, name: "Nguyễn Lê Vũ", position: "Cung Bị Thủ" },
    { id: 11, name: "Đào Trọng Trí", position: "Đơn giản là Chí" },
    { id: 12, name: "Sơn", position: "Trí tưởng tượng" }
];

const employeesPerPage = 3;
let currentPage = 1;
let employees = [...initialEmployees]; 

const employeeNameInput = document.getElementById('employee-name');
const employeePositionInput = document.getElementById('employee-position');
const addEmployeeBtn = document.getElementById('add-employee-btn');
const employeeList = document.getElementById('employee-list');
const paginationContainer = document.getElementById('pagination');

function displayEmployeeList() {
    const startIndex = (currentPage - 1) * employeesPerPage;
    const endIndex = Math.min(startIndex + employeesPerPage, employees.length);
    const currentEmployees = employees.slice(startIndex, endIndex);

    employeeList.innerHTML = '';

    currentEmployees.forEach((employee, index) => {
        const row = document.createElement('tr');

        const sttCell = document.createElement('td');
        sttCell.textContent = startIndex + index + 1;

        const nameCell = document.createElement('td');
        nameCell.textContent = employee.name;

        const positionCell = document.createElement('td');
        positionCell.textContent = employee.position;

        row.appendChild(sttCell);
        row.appendChild(nameCell);
        row.appendChild(positionCell);

        employeeList.appendChild(row);
    });

    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(employees.length / employeesPerPage);
    paginationContainer.innerHTML = '';

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayEmployeeList();
        }
    });
    paginationContainer.appendChild(prevButton);

    const numPageButtons = 4; 
    
  
    let startPage, endPage;
    
    if (totalPages <= numPageButtons) {
        
        startPage = 1;
        endPage = totalPages;
    } else {
   
        const halfButtons = Math.floor(numPageButtons / 2);
        
        if (currentPage <= halfButtons + 1) {
       
            startPage = 1;
            endPage = numPageButtons;
        } else if (currentPage >= totalPages - halfButtons) {
            
            startPage = totalPages - numPageButtons + 1;
            endPage = totalPages;
        } else {
   
            startPage = currentPage - halfButtons;
            endPage = currentPage + halfButtons - 1;
        }
    }

 
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        if (i === currentPage) {
            pageButton.classList.add('active'); 
        }
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayEmployeeList();
        });
        paginationContainer.appendChild(pageButton);
    }
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayEmployeeList();
        }
    });
    paginationContainer.appendChild(nextButton);
}

addEmployeeBtn.addEventListener('click', () => {
    const name = employeeNameInput.value.trim();
    const position = employeePositionInput.value.trim();

    if (name && position) {
        const maxId = employees.reduce((max, employee) => Math.max(max, employee.id), 0);
        const newId = maxId + 1;

        const newEmployee = { id: newId, name, position };
        employees.push(newEmployee);

        employeeNameInput.value = '';
        employeePositionInput.value = '';
        currentPage = Math.ceil(employees.length / employeesPerPage);

        displayEmployeeList();
    } else {
        alert('Vui lòng nhập đầy đủ thông tin nhân viên!');
    }
});

displayEmployeeList();