let newArray = [];
const apiProducts = (link, param1, param2, param3) => {
  let url = new URL(`https://www.jsonbulut.com/json/${link}`),
    params = {
      ref: "951b628383fb48994a79e30caa9a67da",
      start: param1,
      order: param2,
      count: param3,
    };
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key]);
  });
  fetch(url)
    .then((response) => response.json())
    .then((items) => {
      let productsInfo = items.Products[0].bilgiler;
      newArray = productsInfo;
      let rowSec = document.querySelector("#rowSection");
      productsInfo.map((e, index) => {
        rowSec.innerHTML += `<div class="col-4 outerCard"><div class="card" style="width: 18rem;">
        <img src="${e.images[0].normal}" class="card-img-top" alt="...">
        <div class="card-body flex-column d-flex">
          <h5 class="card-title">${e.productName}</h5>
          <p class="card-text">${e.description}</p>
          <button class="btn btn-primary mt-auto" onClick=sendInformation(${index})>Detay</button>
        </div>
      </div>
      </div>`;
      });
    });
};
apiProducts("product.php", 0, "desc", "6");
const sendInformation = (info) => {
  localStorage.setItem("item", "");
  localStorage.setItem("item", JSON.stringify(newArray[info]));
  window.location.href = "productPage.html";
};
