let userInfoArray = [];
let userInfoSession = [];
const logReg = document.querySelector("#logReg");
const navbarRiSec = document.querySelector("#navbarRiSec");

if (localStorage.getItem("userInfo")) {
  userInfoArray = JSON.parse(localStorage.getItem("userInfo"));
} else if (sessionStorage.getItem("userInfo")) {
  userInfoSession = JSON.parse(sessionStorage.getItem("userInfo"));
}
if (userInfoArray.length > 0) {
  navbarRiSec.innerHTML = "";
  logReg.style.display = "none";
  navbarRiSec.innerHTML += `<span class="me-5 text-primary fs-5">
  ${userInfoArray[0].userName} ${userInfoArray[0].userSurname}</span><br>
  <a href="homepage.html" onclick="logoutBtn()">Çıkış</a>`;
} else if (userInfoSession.length > 0) {
  navbarRiSec.innerHTML = "";
  logReg.style.display = "none";
  navbarRiSec.innerHTML += `<span class="me-5 text-primary fs-5">
  ${userInfoSession[0].userName} ${userInfoSession[0].userSurname}</span><br>
  <a href="homepage.html" onclick="logoutBtn()">Çıkış</a>`;
} else {
  logReg.display = "block";
  navbarRiSec.style.display = "none";
}
const logoutBtn = () => {
  localStorage.removeItem("userInfo");
  sessionStorage.removeItem("userInfo");
  window.location.href("homepage.html");
};
