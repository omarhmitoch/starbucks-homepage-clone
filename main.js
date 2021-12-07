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