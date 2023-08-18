const logo = document.querySelector(".logo");
const btn = document.querySelector(".nav-btn");
const links = document.querySelector(".links");
const signBtnContainer = document.querySelector(".sign-container");
const closeBtn = document.querySelector(".close-btn");
const navBar = document.getElementById("nav");

btn.addEventListener("click", function () {
    links.classList.toggle("display-off");
    signBtnContainer.classList.toggle("display-off");
    closeBtn.classList.toggle("display-on");
})

closeBtn.addEventListener("click", function () {
    links.classList.toggle("display-off");
    signBtnContainer.classList.toggle("display-off");
    closeBtn.classList.toggle("display-on");
})