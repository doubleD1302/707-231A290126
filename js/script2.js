// --- JavaScript: Logic xử lý ---

document.getElementById('registerForm').addEventListener('submit', function(event) {
    // 1. Ngăn chặn hành vi reload trang mặc định
    event.preventDefault();

    // 2. Lấy các giá trị từ DOM
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;

    // Biến cờ để kiểm tra trạng thái lỗi
    let isValid = true;

    // Hàm helper để hiển thị/ẩn lỗi
    function toggleError(id, show) {
        const el = document.getElementById(id);
        el.style.display = show ? 'block' : 'none';
    }

    // 3. Validate dữ liệu

    // Kiểm tra Tên
    if (fullname === "") {
        toggleError('error-fullname', true);
        isValid = false;
    } else {
        toggleError('error-fullname', false);
    }

    // Kiểm tra Email (Regex cơ bản)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        toggleError('error-email', true);
        isValid = false;
    } else {
        toggleError('error-email', false);
    }

    // Kiểm tra Mật khẩu (8 ký tự, 1 hoa, 1 thường, 1 số)
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        toggleError('error-password', true);
        isValid = false;
    } else {
        toggleError('error-password', false);
    }

    // Kiểm tra Checkbox
    if (!terms) {
        document.getElementById('error-terms').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('error-terms').style.display = 'none';
    }

    // 4. Xử lý khi dữ liệu hợp lệ
    if (isValid) {
        // Tạo đối tượng người dùng
        const user = {
            fullname: fullname,
            email: email,
            password: password, // Lưu ý: Chỉ dùng cho mục đích bài tập
            agreedTerms: true,
            createdAt: new Date().toISOString()
        };

        // Lưu vào LocalStorage
        localStorage.setItem('currentUser', JSON.stringify(user));

        // Thông báo thành công
        alert('Đăng ký thành công! Dữ liệu đã được lưu.');
        
        // Reset form
        document.getElementById('registerForm').reset();
    }
});