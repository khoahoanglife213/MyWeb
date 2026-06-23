//bài 01
const siteName = "MyWeb";
let topic = "Chủ đề website cá nhân của em";
let imageCount = 5;
let isReady = true;

console.log("Website:", siteName);
console.log("Chủ đề:", topic);
console.log("Số ảnh:", imageCount);
console.log("Đã sẵn sàng dùng JS?", isReady);
console.log("Kiểu dữ liệu topic:", typeof topic);

//bài 02
const mainTitle = document.getElementById("main-title");
const welcomeText = document.getElementById("welcomeText");

if (mainTitle && welcomeText) {
  mainTitle.textContent = "Bảng tin bóng đá";
  welcomeText.textContent = "Chào mừng bạn đã đến với thế giới bóng đá.";
}

//bài 03
const helloBtn = document.getElementById("helloBtn");
const helloResult = document.getElementById("helloResult");

if (helloBtn && helloResult) {
  helloBtn.addEventListener("click", function () {
    helloResult.textContent = "Cảm ơn bạn đã ghé thăm MyWeb!";
  });
}

//bài 04
const toggleAboutBtn = document.getElementById("toggleAboutBtn");
const aboutContent = document.getElementById("aboutContent");

if (toggleAboutBtn && aboutContent) {
  toggleAboutBtn.addEventListener("click", function () {
    aboutContent.classList.toggle("hidden");
  });
}

//bài 05
const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");

if (menuToggle && mainMenu) {
  menuToggle.addEventListener("click", function () {
    mainMenu.classList.toggle("active");
  });
}

//bài 06
const themeSelect = document.getElementById("themeSelect");

if (themeSelect) {
  themeSelect.addEventListener("change", function () {
    document.body.classList.remove("dark-mode", "warm-mode");
    if (themeSelect.value !== "") {
      document.body.classList.add(themeSelect.value);
    }
  });
}

//bài 07
const searchInput = document.getElementById("searchInput");
const searchItems = document.querySelectorAll(".search-item");

if (searchInput && searchItems.length > 0) {
  searchInput.addEventListener("keyup", function () {
    const keyword = searchInput.value.toLowerCase().trim();
    searchItems.forEach(function (item) {
      const text = item.textContent.toLowerCase();
      if (text.includes(keyword)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
}

//bài 08
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const filter = button.dataset.filter;
    galleryItems.forEach(function (item) {
      const category = item.dataset.category;
      if (filter === "all" || category === filter) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
});

//bài 09
const contactForm = document.getElementById("contactForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

if (contactForm && fullName && email && formMessage) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();

    if (nameValue === "") {
      formMessage.textContent = "Vui lòng nhập họ tên.";
      formMessage.style.color = "red";
      return;
    }

    if (emailValue === "" || !emailValue.includes("@")) {
      formMessage.textContent = "Vui lòng nhập email hợp lệ.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "Thông tin đã hợp lệ. Cảm ơn bạn!";
    formMessage.style.color = "green";
  });
}
