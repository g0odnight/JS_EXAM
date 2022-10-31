/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
"use strict";

const ENDPOINT = "https://api.github.com/users";

document.querySelector("#btn").addEventListener("click", () => {
  const resultBlock = document.querySelector("#output");

  fetch(ENDPOINT)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach(function (user) {
        const cardImg = document.createElement("img");
        cardImg.src = user.avatar_url;
        cardImg.alt = "Avatar_URL";
        cardImg.style.width = "auto";
        cardImg.style.height = "300px";
        cardImg.style.borderRadius = "25px";

        const loginName = document.createElement("h4");
        loginName.textContent = `Username:  ${user.login}`;
        loginName.style.fontSize = "23px";
        loginName.style.marginBottom = "40px";

        const card = document.createElement("div");
        card.append(cardImg, loginName);
        resultBlock.append(card);
      });
    })
    .catch((err) => console.log(err));

  document.querySelector("#message").style.display = "none";
});
