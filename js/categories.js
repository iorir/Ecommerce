const categoriesList = document.querySelector("#categoriesList");
let allCategories = [];
fetch(
  "https://www.jsonbulut.com/json/companyCategory.php?ref=951b628383fb48994a79e30caa9a67da"
)
  .then((response) => response.json())
  .then(function (items) {
    allCategories = items.Kategoriler[0].Categories;
    items.Kategoriler[0].Categories.map((e) => {
      if (e.TopCatogryId === "0") {
        categoriesList.innerHTML += `<li onClick="a(${e.CatogryId})"><a href="#">${e.CatogryName}</a><ul id="${e.CatogryId}"></ul></li>`;
      }
    });
    items.Kategoriler[0].Categories.map((e) => {
      if (e.TopCatogryId !== "0") {
        let subCategoriesList = document.getElementById(e.TopCatogryId);
        if (subCategoriesList != null) {
          subCategoriesList.innerHTML += `<li class="collapse ${e.TopCatogryId}" onclick="filterCategory(${e.CatogryId})" ><a href="#">${e.CatogryName}</a></li>`;
        }
      }
    });
  });

/* collapse toggle categories section start */
let a = (id) => {
  const at = document.getElementsByClassName(`${id}`);
  for (i = 0; i < at.length; i++) {
    at[i].classList.toggle("collapse");
  }
};
/* collapse toggle categories section end */

/* filter category onclick start */
const filterCategory = (catId) => {
  window.location.href = `categoryFilter.html?${catId}`;
};
/* filter category onclick end */
