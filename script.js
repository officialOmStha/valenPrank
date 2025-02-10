const button = document.getElementById("prankButton");

button.addEventListener("mouseover", function () {
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 50);
    button.style.left = newX + "px";
    button.style.top = newY + "px";
});

const yess = document.getElementById("yes");


