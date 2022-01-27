const purchaseBtn = document.querySelector("#purchaseBtn");
const localBsktt = JSON.parse(localStorage.getItem("basket"));
let userData;
if (localStorage.getItem("userInfo")) {
  userData = JSON.parse(localStorage.getItem("userInfo"));
} else {
  userData = JSON.parse(sessionStorage.getItem("userInfo"));
}
const purchaseApi = (link, param1, param2) => {
  let url = new URL(`https://www.jsonbulut.com/json/${link}`),
    params = {
      ref: "951b628383fb48994a79e30caa9a67da",
      customerId: param1,
      productId: param2,
      html: param1,
    };
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key]);
  });
  fetch(url)
    .then((response) => response.json())
    .then((items) => {
      console.log(items);
    });
};
if (purchaseBtn) {
  purchaseBtn.addEventListener("click", () => {
    localBsktt.map((item) => {
      purchaseApi("orderForm.php", userData[0].userId, item.productId);
      localStorage.setItem("basket", JSON.stringify(""));
      window.location.href = "homepage.html";
    });
  });
}
