const categoriesList = document.querySelector("#categoriesList");
/* const categoriesList = document.querySelector("#categoriesList");
const apiConnection = (link) => {
  let url = new URL(`https://www.jsonbulut.com/json/${link}`),
    params = {
      ref: "951b628383fb48994a79e30caa9a67da",

    };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  fetch(url).then((items) => console.log(items));
};
apiConnection("companyCategory.php"); */
fetch(
  "https://www.jsonbulut.com/json/companyCategory.php?ref=951b628383fb48994a79e30caa9a67da"
)
  .then((response) => response.json())
  .then(function (items) {
    items.Kategoriler[0].Categories.map((e, index) => {
      if (e.TopCatogryId === "0") {
        categoriesList.innerHTML += `<li onClick="a(${e.CatogryId})"><a href="#">${e.CatogryName}</a><ul id="${e.CatogryId}"></ul></li>`;
      }
    });
    items.Kategoriler[0].Categories.map((e) => {
      if (e.TopCatogryId !== "0") {
        let subCategoriesList = document.getElementById(e.TopCatogryId);
        if (subCategoriesList != null) {
          subCategoriesList.innerHTML += `<li class="collapse ${e.TopCatogryId}" ><a href="#">${e.CatogryName}</a></li>`;
        }
      }
    });
  });
let a = (id) => {
  const at = document.getElementsByClassName(`${id}`);
  for (i = 0; i < at.length; i++) {
    at[i].classList.toggle("collapse");
  }
};

const carouselInner = document.querySelector("#carouselInner");
const apiSliderConnection = (link) => {
  let url = new URL(`https://www.jsonbulut.com/json/${link}`),
    params = {
      ref: "951b628383fb48994a79e30caa9a67da",
    };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  fetch(url)
    .then((response) => response.json())
    .then((items) => {
      let sliderItems = items.Galleries[0].Gallery[91][0];
      sliderItems.map((e) => {
        carouselInner.innerHTML += `<div class="carousel-item">
        <img class="d-block w-100 rounded-3 " src="https://www.jsonbulut.com/admin/upload/${e.url}" alt="First slide">
      </div>`;
      });
      carouselInner.children[0].classList.add("active");
    });
};
apiSliderConnection("gallery.php");
