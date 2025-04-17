document.addEventListener("DOMContentLoaded", () => {
    const jobInput = document.getElementById("job-input");
    const addBtn = document.getElementById("add-btn");
    const jobList = document.getElementById("job-list");
  
    // Hàm thêm công việc vào danh sách
    const addJob = () => {
      const job = jobInput.value.trim();
      if (!job) {
        alert("Vui lòng nhập công việc!");
        return;
      }
  
      // Tạo một mục công việc mới
      const li = document.createElement("li");
      li.innerHTML = `
        ${job}
        <div>
          <button class="edit-btn">Sửa</button>
          <button class="delete-btn">Xóa</button>
        </div>
      `;
  
      // Thêm mục công việc vào danh sách
      jobList.appendChild(li);
  
      // Xóa nội dung trong ô nhập
      jobInput.value = "";
  
      // Gắn sự kiện cho nút "Sửa" và "Xóa"
      const editBtn = li.querySelector(".edit-btn");
      const deleteBtn = li.querySelector(".delete-btn");
  
      editBtn.addEventListener("click", () => {
        const newJob = prompt("Chỉnh sửa công việc:", job);
        if (newJob !== null && newJob.trim() !== "") {
          li.firstChild.textContent = newJob.trim();
        }
      });
  
      deleteBtn.addEventListener("click", () => {
        if (confirm("Bạn có chắc chắn muốn xóa công việc này không?")) {
          li.remove();
        }
      });
    };
  
    // Gắn sự kiện click cho nút "Thêm"
    addBtn.addEventListener("click", addJob);
  });