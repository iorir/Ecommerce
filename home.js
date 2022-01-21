const categoriesList = document.querySelector("#categoriesList");

fetch(
  "https://www.jsonbulut.com/json/companyCategory.php?ref=951b628383fb48994a79e30caa9a67da"
)
  .then((response) => response.json())
  .then(function (items) {
    items.Kategoriler[0].Categories.map((e, index) => {
      if (e.TopCatogryId === "0") {
        categoriesList.innerHTML += `<li data-bs-toggle="collapse" onClick="a(${e.CatogryId})" data-bs-target="#collapseExample"><a href="#">${e.CatogryName}</a><ul id="${e.CatogryId}"></ul></li>`;
      }
    });
    items.Kategoriler[0].Categories.map((e) => {
      if (e.TopCatogryId !== "0") {
        let subCategoriesList = document.getElementById(e.TopCatogryId);
        if (subCategoriesList != null) {
          subCategoriesList.innerHTML += `<li class="collapse ${e.TopCatogryId}" id="collapseExample"><a href="#">${e.CatogryName}</a></li>`;
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
