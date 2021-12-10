const footer_links_arrowDown_toggle = document.querySelectorAll('.down');
const footer_links_arrowUp_toggle = document.querySelectorAll('.up');

const burger_menu_btn = document.querySelector(".burger-nav-btn");
const side_menu = document.querySelector(".nav-menu-container")
const overflow_shadow = document.querySelector(".overflow-shadow ");



burger_menu_btn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("what");
    //document.querySelector("body").classList.toggle("active");
    document.body.classList.toggle("active");
    side_menu.classList.toggle("active");
    overflow_shadow.classList.toggle("active");
})


footer_links_arrowDown_toggle.forEach(btn => {
    btn.addEventListener("click", () => {
        let ul = btn.parentElement.parentElement.parentElement.querySelector("ul");
        ul.classList.add("active");
        btn.parentElement.parentElement.classList.add("active");
    })
})
footer_links_arrowUp_toggle.forEach(btn => {
    btn.addEventListener("click", () => {
        let ul = btn.parentElement.parentElement.parentElement.querySelector("ul");
        ul.classList.remove("active");
        btn.parentElement.parentElement.classList.remove("active");
    })
})


// media query check *** to disable the effects of active nav bar in phone view 



let mediaQueryNavCheck = window.matchMedia("(min-width: 768px)");

window.onresize = function () {
    if (mediaQueryNavCheck.matches) {
        document.body.classList.remove("active");
        side_menu.classList.remove("active");
        overflow_shadow.classList.remove("active");
    }
};

console.log("Hey there! feel free to check more of my work at www.github.com/omarhmitoch")