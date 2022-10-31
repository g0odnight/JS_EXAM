/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
"use strict";

document.querySelector("#search").type = "number";
document.querySelector("#search").step = "any";
const results = document.querySelector("#output");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let personWeight = Number(document.querySelector("#search").value);

  results.style.width = "50%";
  results.style.marginLeft = "25%";
  results.style.borderStyle = "solid";
  results.style.borderRadius = "10px";
  results.style.textAlign = "center";

  let ulElement = document.createElement("ul");
  ulElement.style.listStyle = "none";
  ulElement.style.fontSize = "25px";

  const kilogramsToPound = (personWeight * 2.2046).toFixed(2);
  const kilogramsToGrams = (personWeight / 0.001).toFixed(2);
  const kilogramsToOunce = (personWeight * 35.274).toFixed(2);

  const weightsArray = [kilogramsToPound, kilogramsToGrams, kilogramsToOunce];
  const weightsName = ["Pounds", "Grams", "Ounces"];

  for (let i = 0; i < weightsArray.length; i++) {
    let liElement = document.createElement("li");
    liElement.style.padding = "10px";
    liElement.textContent = `The converted weight of ${personWeight} Kilograms is equal to:  ${weightsArray[i]} ${weightsName[i]}`;
    ulElement.appendChild(liElement);
  }
  results.appendChild(ulElement);
});
