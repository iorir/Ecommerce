const userMail = document.querySelector("#userMail");
const userPass = document.querySelector("#userPass");
const loginBtn = document.querySelector("#loginBtn");
const rememberMe = document.querySelector("#rememberMe");
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
            userPass: btoa(param2),
            userName: items.user[0].bilgiler.userName,
            userSurname: items.user[0].bilgiler.userSurname,
            userId: items.user[0].bilgiler.userId,
          },
        ];
        if (rememberMe.checked) {
          sessionStorage.removeItem("userInfo");
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          if (localStorage.getItem("item").length > 0) {
            window.location.href = "productPage.html";
          } else {
            window.location.href = "homepage.html";
          }
        } else {
          localStorage.removeItem("userInfo");
          sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
          if (localStorage.getItem("item").length > 0) {
            window.location.href = "productPage.html";
          } else {
            window.location.href = "homepage.html";
          }
        }
      } else {
        alert(items.user[0].mesaj);
      }
    });
};

const submitLogin = () => {
  loginApi("userLogin.php", userMail.value, userPass.value);
};
