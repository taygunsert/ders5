// import {liste as listePersonel, adetBilgi} from "./personel.js"
import Personel from "./personel.js";
import Demirbas from "./demirbas.js";

const elPersonelRaporBtn = document.querySelector("#btnPersonelRapor");
const elDemirbasRaporBtn = document.querySelector("#btnDemirbasRapor");
const elRaporAlani = document.querySelector("#raporAlani");

elPersonelRaporBtn.addEventListener("click", () => {
  elRaporAlani.textContent = "";

  Personel.liste.forEach((eleman) => {
    elRaporAlani.textContent += `${eleman},`;
  });

  Personel.adetBilgi();
});

elDemirbasRaporBtn.addEventListener("click", () => {
  elRaporAlani.textContent = "";

  Demirbas.liste.forEach((eleman) => {
    elRaporAlani.textContent += `${eleman},`;
  });
});
