// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
  const textParagraph = document.getElementById("text");
  if (textParagraph) {
    textParagraph.textContent = "This is really cool!";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM has loaded");
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
