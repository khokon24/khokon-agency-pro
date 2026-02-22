const themeBtn = document.getElementById("themeToggle");
const body = document.body;

let themes = ["dark", "light", "gradient"];
let current = 0;

themeBtn.addEventListener("click", () => {
  body.classList.remove(themes[current]);
  current = (current + 1) % themes.length;
  body.classList.add(themes[current]);
});
