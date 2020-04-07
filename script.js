const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Breathe In!";
  container.className = "container grow";
  setTimeout(() => {
    text.innerText = "Hold";
    console.log("hola hold 1");

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";

      console.log("hola holder 2", holdTime);
    }, holdTime);

    console.log("breath 3", breatheTime);
  }, breatheTime);
}
// para que nunca pare
setInterval(breathAnimation, totalTime);
