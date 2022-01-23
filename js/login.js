const userMail = document.querySelector("#userMail");
const userPass = document.querySelector("#userPass");
const loginBtn = document.querySelector("#loginBtn");
const loginApi = (link, param1, param2) => {
  let url = new URL(`https://www.jsonbulut.com/json/${link}`),
    params = {
      ref: "951b628383fb48994a79e30caa9a67da",
      userMail: param1,
      userPass: param2,
    };
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key]);
  });
  fetch(url)
    .then((response) => response.json())
    .then((items) => {
      if (items.user[0].durum == true) {
        alert("giriş başarılı");
      } else {
        alert("giriş bilgileri eksik veya hatalı");
      }
    });
};

loginBtn.addEventListener("click", (e) => {
  console.log("at");
  loginApi("userLogin.php", userMail.value, userPass.value);
});
