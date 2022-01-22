const apiProducts = (link, param1, param2, param3) => {
    let url = new URL(`https://www.jsonbulut.com/json/${link}`),
      params = {
        ref: "951b628383fb48994a79e30caa9a67da",
        start: param1,
        order: param2,
        count: param3,
      };
    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, params[key]);
    });
    fetch(url)
      .then((response) => response.json())
      .then((items) => {
        let productsInfo = items.Products[0].bilgiler;
        productsInfo.map((e) => {
        console.log(e);
        });
        
      });
  };
  apiProducts("product.php", 0, "desc","6");
  