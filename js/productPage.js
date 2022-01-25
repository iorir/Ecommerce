let productInfo = JSON.parse(localStorage.getItem("item"));
const productDesc = document.querySelector("#productDesc");
const productImg = document.querySelector("#productImg");
productImg.setAttribute("src", productInfo.images[0].normal);
productDesc.innerHTML = `<h5 class="p-3">${productInfo.productName}</h5>
<p class="pe-5">
${productInfo.description}
</p>
<div class="text-center d-flex justify-content-center">
  <span class="col-3 my-auto">Fiyat: ${productInfo.price}₺</span
  ><button class="ms-3 btn btn-primary" id="addBasket">Sepete Ekle</button>
</div>`;
