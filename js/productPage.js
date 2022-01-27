let productInfo = JSON.parse(localStorage.getItem("item"));
const productDesc = document.querySelector("#productDesc");
const productImg = document.querySelector("#productImg");
productImg.setAttribute("src", productInfo.images[0].normal);
productDesc.innerHTML = `<h5 class="p-3">${productInfo.productName}</h5>
<p class="px-3 pe-lg-5 pe-md-3">
${productInfo.description}
</p>
<div class="text-center mt-3 d-flex justify-content-center">
  <span class="col-3 my-auto fw-bold">Fiyat: ${productInfo.price}₺</span
  ><button class="ms-3 btn btn-primary" id="addBasket">Sepete Ekle</button>
</div>`;
