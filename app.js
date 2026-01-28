const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const switchBtn = document.getElementById("switchBtn");

redLight.style.background = "red";
let current = "red";

function resetLight() {
  redLight.style.background = "#444";
  yellowLight.style.background = "#444";
  greenLight.style.background = "#444";
}

function switchLight() {
  resetLight();
  yellowLight.style.background = "yellow";

  console.log(current);
  setTimeout(() => {
    resetLight();
    if (current == "red") {
      current = "green";
      greenLight.style.background = "green";
    } else {
      current = "red";
      redLight.style.background = "red";
    }
  }, 1000);
}

switchBtn.addEventListener("click", switchLight);
