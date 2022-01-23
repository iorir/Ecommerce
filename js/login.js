const userMail = document.querySelector("#userMail");
const userPass = document.querySelector("#userPass");
const loginBtn = document.querySelector("#loginBtn");
let userInfo = [];
const loginApi = (link, param1, param2) => {
  let url = new URL(`https://www.jsonbulut.com/json/${link}`),
    params = {
      ref: "951b628383fb48994a79e30caa9a67da",
      userEmail: param1,
      userPass: param2,
      face: "no",
    };
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key]);
  });
  fetch(url)
    .then((response) => response.json())
    .then((items) => {
      if (items.user[0].durum) {
        alert("giriş başarılı");
        userInfo = [
          {
            userEmail: param1,
            userPass: param2,
          },
        ];
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        window.location.href = "homepage.html";
        /* localStorage.setItem("userInfo", JSON.stringify(param1, param2)); */
      } else {
        alert(items.user[0].mesaj);
      }
    });
};

const submitLogin = () => {
  loginApi("userLogin.php", userMail.value, userPass.value);
};
