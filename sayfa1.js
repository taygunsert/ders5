/*"use strict";

let eleman1 = document.querySelector("#kutu1");

eleman1.addEventListener("wheel", function () {
  console.log(this);
});*/

"use strict";

let eleman1 = document.querySelector("#kutu1");

eleman1.addEventListener("click", (olay) => {
  console.log(olay.currentTarget); // Arrow function'larda this yerine geçer
});