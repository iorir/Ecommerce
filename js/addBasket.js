let userInfoArrayB = [];
let userInfoSessionB = [];
const addBasket = document.querySelector("#addBasket");
if (localStorage.getItem("userInfo")) {
  userInfoArrayB = JSON.parse(localStorage.getItem("userInfo"));
} else if (sessionStorage.getItem("userInfo")) {
  userInfoSessionB = JSON.parse(sessionStorage.getItem("userInfo"));
}
addBasket.addEventListener("click", () => {
  if (userInfoArrayB || userInfoSessionB) {
    let itemInfo = JSON.parse(localStorage.getItem("item"));
    let basketOld = JSON.parse(localStorage.getItem("basket"));
    if (basketOld) {
      let newwyArray = [];
      basketOld.map((item) => newwyArray.push(item));
      newwyArray.push(itemInfo);
      console.log(newwyArray);
      localStorage.setItem("basket", JSON.stringify(newwyArray));
    } else {
      localStorage.setItem("basket", JSON.stringify([itemInfo]));
    }
  } else {
    window.location.href = "login.html";
  }
});
