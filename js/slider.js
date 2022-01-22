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

