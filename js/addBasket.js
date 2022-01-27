let userInfoArrayB = [];
let userInfoSessionB = [];
const addBasket = document.querySelector("#addBasket");
if (localStorage.getItem("userInfo")) {
  userInfoArrayB = JSON.parse(localStorage.getItem("userInfo"));
} else if (sessionStorage.getItem("userInfo")) {
  userInfoSessionB = JSON.parse(sessionStorage.getItem("userInfo"));
}
addBasket.addEventListener("click", () => {
  if (userInfoArrayB.length > 0 || userInfoSessionB.length > 0) {
    let itemInfo = JSON.parse(localStorage.getItem("item"));
    let basketOld = JSON.parse(localStorage.getItem("basket"));
    if (basketOld) {
      let newwyArray = [];
      basketOld.map((item) => newwyArray.push(item));
      newwyArray.push(itemInfo);
      localStorage.setItem("basket", JSON.stringify(newwyArray));
      window.location.href = "basket.html";
    } else {
      localStorage.setItem("basket", JSON.stringify([itemInfo]));
      window.location.href = "basket.html";
    }
  } else {
    window.location.href = "login.html";
  }
});
