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
