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
  div1.style.backgroundColor = randColor();

  let div2 = document.querySelector("#clr2");
  div2.style.backgroundColor = randColor();

  let div3 = document.querySelector("#clr3");
  div3.style.backgroundColor = randColor();

  let div4 = document.querySelector("#clr4");
  div4.style.backgroundColor = randColor();

  let div5 = document.querySelector("#clr5");
  div5.style.backgroundColor = randColor();
};
generateRandomColour();

// event = keyup or keydown
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    console.log("Space pressed");
    generateRandomColour();
  }
});
