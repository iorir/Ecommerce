let localBasketProducts = JSON.parse(localStorage.getItem("basket"));
const removeBtn = document.querySelector("#removeBtn");
const deleteModalBtn = document.querySelector("#deleteModalBtn");
const productPurchaseContainer = document.querySelector(
  "#product-purchase-container"
);
const listItems = () => {
  if (localBasketProducts.length > 0) {
    basketItems.innerHTML = "";
    productPurchaseContainer.innerHTML = `<div class="row navbar-bg mx-auto rounded-3 w-100 p-5">
  <div class="justify-content-end col-10 d-flex flex-row rounded-3">
    <span class="align-self-center me-3">Satın almak için satın al butonuna tıklayınız</span> 
    <button class="btn btn btn-success" id="purchaseBtn">Satın Al</button>
    <span class="align-self-center me-3"><-----BURAYA</span> 
  </div>
</div>`;
    localBasketProducts.map((item, index) => {
      basketItems.innerHTML += `
          <div class="navbar-bg rounded-3">
          <div class="d-flex flex-row justify-content-end">
          <a class="text-decoration-none text-dark" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="funk(${index})"  id="removeBtn" href="#"><p class="text-end pt-2 pe-2 fw-bold fs-5">x</p></a>
          </div>
          <div class="col-12 h-50 px-5 d-flex flex-row">
            <img class="w-25 col-5 rounded-3" src="${item.images[0].normal}"></img>
            <div class="px-5 flex-fill">
            <h5 class="">${item.productName}</h5>
            <p class="">${item.description}</p>
            <div class="text-center d-flex justify-content-center">
            </div></div>
            <div class="d-flex justify-content-end">
            <span class="align-self-center fw-bold">Fiyat: ${item.price}₺</span>
            </div>
            </div></div>
            <div class="mb-5"><div>`;
    });
  } else {
    productPurchaseContainer.innerHTML = `<div class="col-12 navbar-bg text-center">
    <p class ="fw-bold fs-2" >Sepetinizde Ürün Bulunmamaktadır</p>
    <div class="row">
    </div>
    </div>`;
  }
};
listItems();
const removeItem = (rmvIndex) => {
  localBasketProducts.map((item, index) => {
    if (rmvIndex === index) {
      localBasketProducts.splice(index, 1);
      localStorage.setItem("basket", JSON.stringify(localBasketProducts));
      basketItems.innerHTML = "";
      listItems();
    }
  });
};

const funk = (index) => {
  deleteModalBtn.addEventListener("click", () => {
    removeItem(index);
  });
};
