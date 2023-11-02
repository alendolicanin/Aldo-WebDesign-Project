/* --------- js for toggle menu --------- */

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "250px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}

/* --------- js for toggle form --------- */

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(112px)";
}

function login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}

/* --------- loader --------- */

window.addEventListener('load', function () {
    setTimeout(function () {
        var preload = document.getElementById("loading");
        preload.style.display = "none";
    }, 850);
});

/* --------- accordion  --------- */

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active_");
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active_");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active_");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active_")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});

/* --------- scroll  --------- */

window.addEventListener("scroll", function () {
    var _content_ = document.querySelectorAll("._scroll_");

    for (i = 0; i < _content_.length; i++) {

        var _contentPosition_ = _content_[i].getBoundingClientRect().top;
        var _screenPosition_ = window.innerHeight;

        if (_contentPosition_ < _screenPosition_) {
            _content_[i].classList.add("_active_");
        }
        else {
            _content_[i].classList.remove("_active_");
        }
    }

})

/* --------- appear  --------- */

window.addEventListener('load', function () {
    setTimeout(function () {
        var _content_ = document.querySelector("._appear_");
        if (_content_ !== null) {
            _content_.classList.add("_active_");
        }
    }, 950);
});
