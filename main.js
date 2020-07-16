const buttonList = [];

function addButton(value = 1) {
  buttonList.push(
    $(".container").prepend(
      `<button type="button" id=${
        buttonList.length + 1
      } onclick="buttonClicked(${value})" class="btn"  style="order:${
        buttonList.length + 1
      }; background-color: ${getRandomColor()}">${value}</button>`
    )
  );
}
let globalStore = null;

addButton();
addButton();
function buttonClicked(value) {
  if (!globalStore) {
    globalStore = value;
  } else {
    addButton(sum(globalStore, value));
    globalStore = null;
  }
}
function sum(value1, value2) {
  return Number(value1) + Number(value2);
}
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
