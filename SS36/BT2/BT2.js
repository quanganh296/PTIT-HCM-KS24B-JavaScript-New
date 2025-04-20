document.addEventListener("DOMContentLoaded", () => {
  const foodList = document.getElementById("food-list");

  // Danh sách món ăn
  const foods = [
    {
      id: 1,
      name: "Phở Bò Hà Nội",
      likes: 0,
      img: "https://bizweb.dktcdn.net/100/458/718/files/pho-bo.jpg?v=1697421499244",
    },
    {
      id: 2,
      name: "Bún Bò Huế",
      likes: 0,
      img: "https://i2.ex-cdn.com/crystalbay.com/files/content/2024/08/15/bun-bo-hue-2-0933.jpg",
    },
    {
      id: 3,
      name: "Cơm Tấm Sài Gòn",
      likes: 0,
      img: "https://static.vinwonders.com/production/com-tam-sai-gon-thumb.jpg",
    },
  ];

  // Lấy dữ liệu từ localStorage
  const savedLikes = JSON.parse(localStorage.getItem("foodLikes")) || {};
  foods.forEach((food) => {
    if (savedLikes[food.id]) {
      food.likes = savedLikes[food.id];
    }
  });

  // Hiển thị danh sách món ăn
  const renderFoods = () => {
    foodList.innerHTML = ""; // Xóa nội dung cũ
    foods.forEach((food) => {
      const foodItem = document.createElement("div");
      foodItem.className = "food-item";
      foodItem.innerHTML = `
        <img src="${food.img}" alt="${food.name}" class="food-img">
        <div class="food-info">
          <h3>${food.name}</h3>
          <div>
            <span>${food.likes} lượt thích</span>
            <button onclick="likeFood(${food.id})">Thích +1</button>
          </div>
        </div>
      `;
      foodList.appendChild(foodItem);
    });
  };

  // Hàm xử lý khi bấm nút "Thích"
  window.likeFood = (id) => {
    const food = foods.find((f) => f.id === id);
    if (food) {
      food.likes++;
      localStorage.setItem(
        "foodLikes",
        JSON.stringify(
          foods.reduce((acc, f) => {
            acc[f.id] = f.likes;
            return acc;
          }, {})
        )
      );
      renderFoods(); // Cập nhật giao diện
    }
  };

  // Hiển thị danh sách món ăn ban đầu
  renderFoods();
});