document.addEventListener("DOMContentLoaded", function () {
    const subjectInput = document.getElementById("subject-input");
    const addSubjectBtn = document.getElementById("add-subject-btn");
    const subjectList = document.getElementById("subject-list");
let count=1;
    addSubjectBtn.addEventListener("click", function () {
        const subjectName = subjectInput.value.trim();

        if (subjectName === "") {
            alert("Tên môn học không được để trống!");
            return;
        }

 
        const listItem = document.createElement("li");
        listItem.textContent = `${count}. ${subjectName}`;

  
        subjectList.appendChild(listItem);
count++;
        subjectInput.value = "";
    });
});
