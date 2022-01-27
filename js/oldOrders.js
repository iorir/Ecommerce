const oldOrders = document.querySelector("#old-orders");
let userDataa;
if (localStorage.getItem("userInfo")) {
  userDataa = JSON.parse(localStorage.getItem("userInfo"));
} else {
  userDataa = JSON.parse(sessionStorage.getItem("userInfo"));
}

const oldOrdersApi = (link, param1) => {
  let url = new URL(`https://www.jsonbulut.com/json/${link}`),
    params = {
      ref: "951b628383fb48994a79e30caa9a67da",
      musterilerID: param1,
    };
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key]);
  });
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.orderList[0].length > 0);
      if (data.orderList[0]) {
        data.orderList[0].map((item) => {
          oldOrders.innerHTML += `<div class="m-2 p-2 rounded-3 text-white bg-primary border border-dark d-flex flex-row">
        <img class="img-size" src="${item.normal}" alt="">
        <span class="ms-2 fw-bold flex-fill">${item.urun_adi}</span>
        <span class="ms-2 fw-bold align-self-center">${item.fiyat}₺</span>
        </div>`;
        });
      } else {
        oldOrders.innerHTML = "İlk alışverişinizi yapmaya ne dersiniz?";
      }
    });
};
oldOrdersApi("orderList.php", userDataa[0].userId);
