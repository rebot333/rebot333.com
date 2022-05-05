const splash_list = [
    "I hope you're having a splendid day",
    "howdy there",
    "how's it goin",
    "no monkeyin around",
    "click the duck button",
    "heh",
    "I spell Jef with one f",
    "hi how are ya",
    "how hi are ya",
    "this page was loaded at " + new Date().toLocaleTimeString(),
    "what did you eat for lunch today?",
    "treat yourself to a glass of your favorite drink"
];

document.getElementById("splash").innerHTML = splash_list[Math.floor(Math.random() * splash_list.length)];



function toggleNavigationMenu(value) {
    if (value) document.getElementById("navigation_menu").style.display = "flex";
    else document.getElementById("navigation_menu").style.display = "none";
}

document.addEventListener("scroll", () => {
    document.getElementById("navigation_menu").style.top = window.scrollY + "px";
});