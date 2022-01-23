const userName = document.querySelector("#userName");
const userSurname = document.querySelector("#userSurname");
const userPhone = document.querySelector("#userPhone");
const userMailv = document.querySelector("#userMail");
const userPassv = document.querySelector("#userPass");
const registerBtn = document.querySelector("#registerBtn");
const formSign = document.querySelector("#formSign");
const registerApi = (link, param1, param2, param3, param4, param5) => {
  let url = new URL(`https://www.jsonbulut.com/json/${link}`),
    params = {
      ref: "951b628383fb48994a79e30caa9a67da",
      userName: param1,
      userSurname: param2,
      userPhone: param3,
      userMail: param4,
      userPass: param5,
    };
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key]);
  });
  fetch(url)
    .then((response) => response.json())
    .then((items) => {
      if (items.user[0].durum) {
        alert("Kayıt işlemi başarı ile gerçekleşti giriş yapabilirsiniz");
        window.location.href = "login.html";
      } else {
        alert(items.user[0].mesaj);
        userName.value = "";
        userSurname.value = "";
        userPhone.value = "";
        userMailv.value = "";
        userPassv.value = "";
      }
    });
};

const a = () => {
  registerApi(
    "userRegister.php",
    userName.value,
    userSurname.value,
    userPhone.value,
    userMailv.value,
    userPassv.value
  );
};
