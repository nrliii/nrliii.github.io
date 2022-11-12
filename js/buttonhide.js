const header = document.querySelector(".header");
const buttonshow = document.querySelector(".button2");
function hide() {
    header.style.display = "none";
    buttonshow.style.display = "flex";
}
function show() {
    header.style.display = "flex";
    buttonshow.style.display = "none";
}