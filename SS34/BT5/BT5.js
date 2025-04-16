document.addEventListener("DOMContentLoaded", () => {
  const employeeNameInput = document.getElementById("employee-name");
  const employeeMajorInput = document.getElementById("employee-major");
  const addEmployeeButton = document.getElementById("add-employee");
  const employeeTableBody = document.querySelector("#employee-table tbody");

  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  const renderEmployees = () => {
    employeeTableBody.innerHTML = "";
    employees.forEach((employee, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${employee.name}</td>
        <td>${employee.major}</td>
      `;
      employeeTableBody.appendChild(row);
    });
  };
  const saveEmployeesToLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
  };
  addEmployeeButton.addEventListener("click", () => {
    const name = employeeNameInput.value.trim();
    const major = employeeMajorInput.value.trim();

    if (!name || !major) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    employees.push({ name, major });
    saveEmployeesToLocalStorage();
    renderEmployees();

    employeeNameInput.value = "";
    employeeMajorInput.value = "";
  });
  renderEmployees();
});