const body = document.getElementsByTagName("body")[0];
const span = document.getElementsByClassName("color")[0];
const button = document.getElementsByTagName("button")[0];

const colors = ["green", "blue", "red", "yellow"]
button.addEventListener("click", function () {
    const i = Math.floor(Math.random() * 4);
    body.style.backgroundColor = colors[i];
    span.innerText = colors[i];
})