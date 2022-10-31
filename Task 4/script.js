/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const resultBlock = document.querySelector("#output");
let pageTitle = document.querySelector("h1");
pageTitle.style.marginBottom = "50px";

window.addEventListener("load", () => {
  fetch("./cars.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach(function (cars) {
        const carBrand = document.createElement("h2");
        const carModel = document.createElement("h4");
        carBrand.textContent = cars.brand;
        carModel.textContent = cars.models;
        carBrand.style.marginTop = "15px";
        carBrand.style.fontSize = "23px";
        carBrand.style.marginBottom = "40px";

        const card = document.createElement("div");
        card.style.width = "900px";
        card.style.height = "200px";
        card.style.textAlign = "center";
        card.style.borderStyle = "solid";
        card.style.borderRadius = "10px";
        card.style.marginBottom = "20px";

        card.append(carBrand, carModel);
        resultBlock.append(card);
      });
    })
    .catch((err) => console.log(err));
});
