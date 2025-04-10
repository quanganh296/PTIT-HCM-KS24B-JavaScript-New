let dish = [
    { name: "Rau sạch", category: "Đồ ăn" },
    { name: "Thịt lợn", category: "Đồ ăn" },
    { name: "Pepsi không calo", category: "Nước" },
    { name: "Cocacola", category: "Nước" },
    { name: "Cờ lê", category: "Dụng cụ" },
    { name: "Tua vít", category: "Dụng cụ" },
  ];
  function filterProducts() {
    const selectedCategory = document.getElementById("categorySelect").value;
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
  
    const filteredDishes = dish.filter(
      (item) => item.category === selectedCategory || selectedCategory === ""
    );
    filteredDishes.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `Tên đồ ăn: ${item.name} - Danh mục: ${item.category}`;
      productList.appendChild(li);
    });
  }