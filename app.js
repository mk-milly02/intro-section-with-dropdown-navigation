let menu = document.querySelector(".menu");
let offcanvas = document.querySelector(".transparent-canvas");
let body = document.querySelector("body");

function openMenu() {
    body.style.position = "fixed";
    offcanvas.classList.add("show");
    menu.classList.add("show");
}

function closeMenu() {
    body.style.position = "static";
    offcanvas.classList.remove("show");
    menu.classList.remove("show");
}

function drop1() {
    let arrow = document.getElementById("features-link").children[1];
    let sub_menu = document.getElementById("features");

    arrow.classList.toggle("icon-arrow-up");
    sub_menu.classList.toggle("sub-list-show");
}

function drop2() {
    let arrow = document.getElementById("company-link").children[1];
    let sub_menu = document.getElementById("company-sub");

    arrow.classList.toggle("icon-arrow-up");
    sub_menu.classList.toggle("sub-list-show");
}
