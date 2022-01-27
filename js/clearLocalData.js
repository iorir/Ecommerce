const navHome = document.querySelector("#nav-home");
const navNews = document.querySelector("#nav-news");
const navContact = document.querySelector("#nav-contact");
const navBasket = document.querySelector("#nav-basket");
const navLogin = document.querySelector("#nav-login");
const navRegister = document.querySelector("#nav-register");

navHome.addEventListener("click", () => {
  localStorage.removeItem("item");
});

navNews.addEventListener("click", () => {
  localStorage.removeItem("item");
});

navContact.addEventListener("click", () => {
  localStorage.removeItem("item");
});

navContact.addEventListener("click", () => {
  localStorage.removeItem("item");
});

navBasket.addEventListener("click", () => {
  localStorage.removeItem("item");
});

navLogin.addEventListener("click", () => {
  localStorage.removeItem("item");
});

navRegister.addEventListener("click", () => {
  localStorage.removeItem("item");
});
