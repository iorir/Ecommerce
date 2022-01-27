const navHome = document.querySelector("#nav-home");
const navNews = document.querySelector("#nav-news");
const navContact = document.querySelector("#nav-contact");
const navBasket = document.querySelector("#nav-basket");
const navLogin = document.querySelector("#nav-login");
const navRegister = document.querySelector("#nav-register");

const footHome = document.querySelector("#foot-home");
const footNews = document.querySelector("#foot-news");
const footContact = document.querySelector("#foot-contact");

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

footHome.addEventListener("click", () => {
  localStorage.removeItem("item");
});
footNews.addEventListener("click", () => {
  localStorage.removeItem("item");
});
footContact.addEventListener("click", () => {
  localStorage.removeItem("item");
});
