let userInfoArray = [];
let userInfoSession = [];
const logReg = document.querySelector("#logReg");
const navbarRiSec = document.querySelector("#navbarRiSec");
const basketLiItem = document.querySelector("#basketLiItem");

if (localStorage.getItem("userInfo")) {
  userInfoArray = JSON.parse(localStorage.getItem("userInfo"));
} else if (sessionStorage.getItem("userInfo")) {
  userInfoSession = JSON.parse(sessionStorage.getItem("userInfo"));
}
if (userInfoArray.length > 0) {
  basketLiItem.style.display = "block";
  navbarRiSec.innerHTML = "";
  logReg.style.display = "none";
  navbarRiSec.innerHTML += `<a href="profile.html" class=""><span class="me-5 text-decoration-none text-primary fs-5">
  ${userInfoArray[0].userName} ${userInfoArray[0].userSurname}</span> </a> <br>
  <a href="homepage.html" onclick="logoutBtn()">Çıkış</a>`;
} else if (userInfoSession.length > 0) {
  basketLiItem.style.display = "block";
  navbarRiSec.innerHTML = "";
  logReg.style.display = "none";
  navbarRiSec.innerHTML += `<a href="profile.html"><span class="me-5 text-primary fs-5">
  ${userInfoSession[0].userName} ${userInfoSession[0].userSurname}</span></a><br>
  <a href="homepage.html" onclick="logoutBtn()">Çıkış</a>`;
} else {
}
if (window.location.href === "http://127.0.0.1:5500/homepage.html") {
  localStorage.removeItem("item");
}

const logoutBtn = () => {
  localStorage.removeItem("userInfo");
  sessionStorage.removeItem("userInfo");
  localStorage.setItem("basket", JSON.stringify(""));
  window.location.href("homepage.html");
  logReg.display = "block";
  navbarRiSec.style.display = "none";
  basketLiItem.style.display = "none";
};
