document.addEventListener("DOMContentLoaded", () => {
    const products = [
      {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://laptopgiasi.vn/wp-content/uploads/2024/01/Mua-Ban-Laptop-Dell-XPS-15-9510-Gia-Si-Re-Moi-Cu-Core-i7-11800H-Laptopgiasi-vn-2-Trong-1-Sieu-Mong-Hieu-Nang-Cao-2.jpg',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
      },
      {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',
      },
      {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
      },
      {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv36f0uj8xuaf',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
      },
      {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.',
      },
      {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
      },
    ];
    localStorage.setItem('products', JSON.stringify(products));
  
    const productList = document.getElementById('product-list');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const formatPrice = (price) => {
      return new Intl.NumberFormat('vi-VN').format(price) + ' VNĐ';
    };
    const renderProducts = (filteredProducts) => {
      productList.innerHTML = '';
      filteredProducts.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('card');
        productCard.innerHTML = `
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-price">${formatPrice(product.price)}</p>
            <p class="card-text">${product.description}</p>
            <button class="btn btn-primary">Buy</button>
          </div>
        `;
        productList.appendChild(productCard);
      });
    };
    renderProducts(products);
    searchBtn.addEventListener('click', () => {
      const searchTerm = searchInput.value.trim().toLowerCase();
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
      renderProducts(filteredProducts);
    });
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchBtn.click();
      }
    });
  });