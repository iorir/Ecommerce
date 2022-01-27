const userSolId = document.querySelector("#user-id");
const userConfName = document.querySelector("#user-name");
const userConfSurname = document.querySelector("#user-surname");
const userConfEmail = document.querySelector("#user-email");
const userConfPhone = document.querySelector("#user-phone");
const userConfPass = document.querySelector("#user-pass");
const userId = document.querySelector("#user-id");
const submitBtnn = document.querySelector("#submit-btnn");

const userConfigApi = (
  link,
  param1,
  param2,
  param3,
  param4,
  param5,
  param6
) => {
  let url = new URL(`https://www.jsonbulut.com/json/${link}`),
    params = {
      ref: "951b628383fb48994a79e30caa9a67da",

      userName: param2,
      userSurname: param3,
      userMail: param4,
      userPhone: param5,
      userPass: param6,
      userId: param1,
    };
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key]);
  });
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.durum ? alert("güncellendi") : alert("güncelleme başarısız");
    });
};
let userLocalData;
if (localStorage.getItem("userInfo")) {
  userLocalData = JSON.parse(localStorage.getItem("userInfo"));
} else {
  userLocalData = JSON.parse(sessionStorage.getItem("userInfo"));
}
userSolId.value = userLocalData[0].userId;
userConfName.value = userLocalData[0].userName;
userConfSurname.value = userLocalData[0].userSurname;
userConfEmail.value = userLocalData[0].userEmail;

const updateInformation = () => {
  userConfigApi(
    "userSettings.php",
    userSolId.value,
    userConfName.value,
    userConfSurname.value,
    userConfEmail.value,
    userConfPhone.value,
    userConfPass.value
  );
};
