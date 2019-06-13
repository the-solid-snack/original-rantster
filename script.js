window.onscroll = function() {getSticky()};

let topNavBar = document.getElementById("topNavBar");

let sticky = topNavBar.offsetTop;

function getSticky() {
    if (window.pageYOffset >= sticky) {
        topNavBar.classList.add("sticky")
    } else {
        topNavBar.classList.remove("sticky");
    }
}