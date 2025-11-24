// 1. Cấu hình thời gian: 10 phút = 10 * 60 giây
let timeInSeconds = 10 * 60; 

const timerElement = document.getElementById('countdown');
const modalElement = document.getElementById('modal-overlay');

// 2. Hàm cập nhật đồng hồ
function updateTimer() {
    // Tính toán phút và giây
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    // Format số: Thêm số 0 đằng trước nếu nhỏ hơn 10 (Ví dụ: 09, 05)
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;

    // Hiển thị lên màn hình
    timerElement.innerText = `${displayMinutes}:${displaySeconds}`;

    // 3. Xử lý Logic CSS Animation (dưới 1 phút = dưới 60 giây)
    if (timeInSeconds < 60) {
        timerElement.classList.add('warning'); // Thêm class màu đỏ/nhấp nháy
    }

    // 4. Kiểm tra hết giờ
    if (timeInSeconds <= 0) {
        clearInterval(countdownInterval); // Dừng đồng hồ lại
        timerElement.innerText = "00:00";
        showModal(); // Hiện thông báo
    } else {
        timeInSeconds--; // Giảm thời gian
    }
}

// 5. Khởi tạo Interval: Chạy hàm updateTimer mỗi 1000ms (1 giây)
// Gán vào biến để có thể clear sau này
const countdownInterval = setInterval(updateTimer, 1000);

// Hàm hiển thị Modal
function showModal() {
    modalElement.style.display = 'flex';
}

// Hàm đóng Modal (được gọi từ nút bấm trong HTML)
function closeModal() {
    modalElement.style.display = 'none';
}