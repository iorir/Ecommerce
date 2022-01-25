let itemID = window.location.href.split("?");
let productSection = document.querySelector("#productSection");
const catFilterApi = (link, param1, param2) => {
  let url = new URL(`https://www.jsonbulut.com/json/${link}`),
    params = {
      ref: "951b628383fb48994a79e30caa9a67da",
      start: param1,
      categoryId: param2,
    };
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key]);
  });
  fetch(url)
    .then((response) => response.json())
    .then((items) => {
      let filteredProducts = items.Products[0].bilgiler;
      if (filteredProducts) {
        filteredProducts.map((e, index) => {
          productSection.innerHTML += `<div class="col-4 outerCard"><div class="card mx-auto" style="width: 18rem;">
        <img src="${e.images[0].normal}" class="card-img-top" alt="...">
        <div class="card-body flex-column d-flex">
          <h5 class="card-title">${e.productName}</h5>
          <p class="card-text">${e.description}</p>
          <button class="btn btn-primary mt-auto" onClick=sendInformation(${index})>Detay</button>
        </div>
      </div>
      </div>`;
        });
      } else {
        productSection.innerHTML = `<p class="text-center text-primary fw-bold fs-4">ARADIĞINIZ KATEGORİYE AİT ÜRÜN BULUNMAMAKTADIR<p>`;
      }
    });
};
catFilterApi("product.php", "0", itemID[1]);
