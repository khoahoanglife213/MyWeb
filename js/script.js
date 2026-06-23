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
const mainTitle = document.getElementById("mainTitle");
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
