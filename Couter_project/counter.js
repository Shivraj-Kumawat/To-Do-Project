let count = 0;

const heading = document.getElementById("count");

document.getElementById("inc").addEventListener("click", () => {
  count++;
  heading.textContent = count;
});

document.getElementById("dec").addEventListener("click", () => {
  count--;
  heading.textContent = count;
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  heading.textContent = count;
});
