const colorBox = document.querySelector("#coloBox");
const hex = document.querySelector("#hex");
const rgb = document.querySelector("#rgb");

colorBox.addEventListener("input", function () {
  hex.innerHTML = this.value;
  rgb.innerHTML = hextorgb(this.value);
});

function hextorgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}
