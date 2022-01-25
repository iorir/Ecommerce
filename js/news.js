let newsArray = [];
let modalTitle = document.querySelector("#staticBackdropLabel");
let modalBody = document.querySelector("#modalBody");
const newsApi = (link, param1) => {
  let url = new URL(`https://www.jsonbulut.com/json/${link}`),
    params = {
      ref: "951b628383fb48994a79e30caa9a67da",
      start: param1,
    };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  fetch(url)
    .then((response) => response.json())
    .then((items) => {
      let newsRow = document.querySelector("#newsRow");
      let newsInformation = items.News[0].Haber_Bilgileri;
      newsArray = newsInformation;
      newsInformation.map((e, index) => {
        newsRow.innerHTML += `<div class="col-4"><div class="card mx-auto" style="width: 18rem;">
            <img src="${e.picture}" class="card-img-top" alt="...">
            <div class="card-body flex-column d-flex">
            <h5 class="card-title">${e.title}</h5>
            <p class="card-text">${e.s_description}</p>
            <button type="button" onclick="sendNews(${index})" class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Detay
            </button>
            </div>
            </div>
            </div>`;
      });
    });
};
newsApi("news.php", "0");

const sendNews = (news) => {
  modalTitle.innerHTML = `${newsArray[news].title}`;
  modalBody.innerHTML = `${newsArray[news].l_description}`;
};
