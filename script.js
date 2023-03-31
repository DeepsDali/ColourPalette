//generate random color
const randColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};
let div1 = document.querySelector("#clr1");
let text1 = document.querySelector("#text1");
let div2 = document.querySelector("#clr2");
let text2 = document.querySelector("#text2");
let div3 = document.querySelector("#clr3");
let text3 = document.querySelector("#text3");
let div4 = document.querySelector("#clr4");
let text4 = document.querySelector("#text4");
let div5 = document.querySelector("#clr5");
let text5 = document.querySelector("#text5");

// console.log(randColor());
let generateRandomColour = () => {
  let div1Clr = randColor();
  div1.style.backgroundColor = div1Clr;
  let text1sliced = div1Clr.slice(1);
  text1.innerHTML = `${text1sliced}`;

  let div2Clr = randColor();
  div2.style.backgroundColor = div2Clr;
  let text2sliced = div2Clr.slice(1);
  text2.innerHTML = `${text2sliced}`;

  let div3Clr = randColor();
  div3.style.backgroundColor = div3Clr;
  let text3sliced = div3Clr.slice(1);
  text3.innerHTML = `${text3sliced}`;

  let div4Clr = randColor();
  div4.style.backgroundColor = div4Clr;
  let text4sliced = div4Clr.slice(1);
  text4.innerHTML = `${text4sliced}`;

  let div5Clr = randColor();
  div5.style.backgroundColor = div5Clr;
  let text5sliced = div5Clr.slice(1);
  text5.innerHTML = `${text5sliced}`;
};
generateRandomColour();

// event = keyup or keydown
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    console.log("Space pressed");
    generateRandomColour();
  }
});

let colorPickerButton = document.getElementById("text1");
let colorInput = document.getElementById("color-picker");

colorPickerButton.addEventListener("click", function () {
  colorInput.click();
  let selectedColour = colorPicker.value;
  console.log(selectedColour);
  div1.style.backgroundColor = selectedColour;
});

colorInput.addEventListener("input", () => {
  let selectedColour = colorInput.value;
  div1.style.backgroundColor = selectedColour;
  text1sliced = selectedColour.slice(1);
  text1.innerHTML = `${text1sliced}`;
});

// let changeColour = () => {
//   let colour = document.querySelector("#inputColour1").value;
//   div1.style.backgroundColor = colour;
//   text1.innerHTML = `${colour}`;
// };
