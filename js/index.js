let clickDiv = document.getElementsByClassName('pointer')[0];
let lineDown = document.getElementById("line1");
let lineUp = document.getElementById("line3");
let lineDisapper = document.getElementById("line2");
let menu = document.querySelector('nav ul');
let count = 0;
clickDiv.onclick = function () {
    ++count;
    if (count % 2 === 1) {
        lineDown.style.animation = "line1 0.5s linear forwards";
        lineUp.style.animation = "line3 0.5s linear forwards";
        lineDisapper.style.animation = "line2 0.3s linear forwards";
        menu.style.display = 'flex';
    }
    else {
        lineDown.style.animation = "line1-reverse 0.5s linear forwards";
        lineUp.style.animation = "line3-reverse 0.5s linear forwards";
        lineDisapper.style.animation = "line2-reverse 0.5s linear forwards";
        menu.style.display = 'none';
    }
    if (count === 2) {
        count = 0;
    }
}