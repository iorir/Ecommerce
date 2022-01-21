const categoriesList = document.querySelector("#categoriesList");
fetch(
  "https://www.jsonbulut.com/json/companyCategory.php?ref=951b628383fb48994a79e30caa9a67da"
)
  .then((response) => response.json())
  .then(function (items) {
    items.Kategoriler[0].Categories.map((e) => {
      if (e.TopCatogryId === "0") {
        categoriesList.innerHTML += `<li><a href="">${e.CatogryName}</a><ul id=></ul></li>`;
      }
      console.log(e);
    });
  })
  .catch((err) => console.log(err));
