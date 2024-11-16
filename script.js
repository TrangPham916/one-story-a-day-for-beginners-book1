const pages = document.querySelectorAll('.page');
let currentPage = 0;

// Hàm cập nhật trạng thái các trang
function updatePages() {
  pages.forEach((page, index) => {
    if (index < currentPage) {
      // Các trang trước trang hiện tại (lật qua trái)
      page.style.transform = 'rotateY(-180deg)';
      page.style.zIndex = pages.length - index; // Xếp chồng đúng
    } else if (index === currentPage) {
      // Trang hiện tại
      page.style.transform = 'rotateY(0deg)';
      page.style.zIndex = pages.length;
    } else {
      // Các trang sau trang hiện tại (ở vị trí ban đầu)
      page.style.transform = 'rotateY(0deg)';
      page.style.zIndex = pages.length - index;
    }
  });
}

// Chuyển đến trang trước
document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePages();
  }
});

// Chuyển đến trang tiếp theo
document.getElementById('next').addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePages();
  }
});



// Khởi tạo
updatePages();
