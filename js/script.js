// 1. Mảng dữ liệu sản phẩm (Giả lập Database)
const products = [
    { id: 1, name: "Laptop Dell XPS 13", price: "25.000.000 đ", category: "Laptop" },
    { id: 2, name: "iPhone 14 Pro Max", price: "30.000.000 đ", category: "Điện thoại" },
    { id: 3, name: "Chuột Logitech MX Master", price: "2.500.000 đ", category: "Phụ kiện" },
    { id: 4, name: "Bàn phím cơ Keychron", price: "1.800.000 đ", category: "Phụ kiện" },
    { id: 5, name: "Màn hình LG UltraWide", price: "9.000.000 đ", category: "Màn hình" },
    { id: 6, name: "Tai nghe Sony WH-1000XM5", price: "8.000.000 đ", category: "Âm thanh" }
];

// Lấy các phần tử DOM cần thiết
const productList = document.getElementById('product-list');
const searchInput = document.getElementById('searchInput');
const noResultMsg = document.getElementById('no-result');

// 2. Hàm hiển thị (Render) danh sách sản phẩm ra màn hình
function renderProducts(list) {
    // Xóa nội dung cũ
    productList.innerHTML = '';

    // Kiểm tra nếu danh sách rỗng
    if (list.length === 0) {
        noResultMsg.style.display = 'block'; // Hiện thông báo lỗi
        return; // Dừng hàm
    } else {
        noResultMsg.style.display = 'none'; // Ẩn thông báo lỗi
    }

    // Duyệt qua từng sản phẩm và tạo HTML
    list.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Sử dụng Template Literal để tạo nội dung
        card.innerHTML = `
            <div class="category">${product.category}</div>
            <h3>${product.name}</h3>
            <div class="price">${product.price}</div>
        `;
        
        productList.appendChild(card);
    });
}

// 3. Gọi hàm render lần đầu (hiển thị tất cả)
renderProducts(products);

// 4. Xử lý sự kiện tìm kiếm (Sự kiện 'input' kích hoạt ngay khi gõ)
searchInput.addEventListener('input', function(e) {
    // Lấy từ khóa, xóa khoảng trắng thừa và chuyển về chữ thường
    const keyword = e.target.value.trim().toLowerCase();

    // Lọc danh sách sản phẩm
    const filteredProducts = products.filter(product => {
        // Chuyển tên sản phẩm về chữ thường để so sánh
        return product.name.toLowerCase().includes(keyword);
    });

    // Render lại danh sách đã lọc
    renderProducts(filteredProducts);
});