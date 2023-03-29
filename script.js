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

// console.log(randColor());
let generateRandomColour = () => {
  let div1 = document.querySelector("#clr1");
  let text1 = document.querySelector("#text1");
  let div1Clr = randColor();
  div1.style.backgroundColor = div1Clr;
  text1.innerHTML = `${div1Clr}`;

  let div2 = document.querySelector("#clr2");
  let text2 = document.querySelector("#text2");
  let div2Clr = randColor();
  div2.style.backgroundColor = div2Clr;
  text2.innerHTML = `${div2Clr}`;

  let div3 = document.querySelector("#clr3");
  let text3 = document.querySelector("#text3");
  let div3Clr = randColor();
  div3.style.backgroundColor = div3Clr;
  text3.innerHTML = `${div3Clr}`;

  let div4 = document.querySelector("#clr4");
  let text4 = document.querySelector("#text4");
  let div4Clr = randColor();
  div4.style.backgroundColor = div4Clr;
  text4.innerHTML = `${div4Clr}`;

  let div5 = document.querySelector("#clr5");
  let text5 = document.querySelector("#text5");
  let div5Clr = randColor();
  div5.style.backgroundColor = div5Clr;
  text5.innerHTML = `${div5Clr}`;
};
generateRandomColour();

// event = keyup or keydown
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    console.log("Space pressed");
    generateRandomColour();
  }
});
