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

// function to convert hex to rgb
let hexToRgb = (hex) => {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};
// function to calculate luminance

let luminance = (r, g, b) => {
  var a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};
console.log(luminance(255, 255, 255) + 0.05);
console.log(luminance(224, 16, 16) + 0.05);
console.log(luminance(240, 239, 239) + 0.05);

//assign variables

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

let generateRandomColour = (div, text) => {
  let divClr = randColor();
  div.style.backgroundColor = divClr;
  let textsliced = divClr.slice(1);
  text.innerHTML = `${textsliced}`;
  //   change text colour
  let rgbColor = hexToRgb(divClr);
  let selectedColorLuminance =
    luminance(rgbColor.r, rgbColor.g, rgbColor.b) + 0.05;
  let contrastRatio = 1.05 / selectedColorLuminance;
  contrastRatio > 3
    ? (text.style.color = "#FFFFFF")
    : (text.style.color = "#000000");
};

generateRandomColour(div1, text1);
generateRandomColour(div2, text2);
generateRandomColour(div3, text3);
generateRandomColour(div4, text4);
generateRandomColour(div5, text5);

// event = keyup or keydown
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    console.log("Space pressed");
    // generateRandomColour();
    generateRandomColour(div1, text1);
    generateRandomColour(div2, text2);
    generateRandomColour(div3, text3);
    generateRandomColour(div4, text4);
    generateRandomColour(div5, text5);
  }
});
//
let colorPickerButton = document.getElementById("text1");
let colorInput = document.getElementById("color-picker");

colorPickerButton.addEventListener("click", function () {
  colorInput.click();
});

colorInput.addEventListener("input", () => {
  let selectedColour = colorInput.value;
  console.log(hexToRgb(selectedColour));
  let rgbColor = hexToRgb(selectedColour);
  console.log(rgbColor);
  let selectedColorLuminance =
    luminance(rgbColor.r, rgbColor.g, rgbColor.b) + 0.05;
  console.log(selectedColorLuminance);
  let contrastRatio = 1.05 / selectedColorLuminance;
  console.log(`cr = ${contrastRatio}`);
  contrastRatio > 3
    ? (text1.style.color = "#FFFFFF")
    : (text1.style.color = "#000000");
  div1.style.backgroundColor = selectedColour;
  text1sliced = selectedColour.slice(1);
  text1.innerHTML = `${text1sliced.toUpperCase()}`;
});
