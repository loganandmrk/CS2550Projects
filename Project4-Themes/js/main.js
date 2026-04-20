let checkbox = document.getElementById("dark-mode");
let darkMode = document.createElement("link");
let lightMode = document.getElementById("default");

darkMode.rel = "stylesheet";
darkMode.href = "styles/darkmode.css";
darkMode.id = "darkMode"

checkbox.addEventListener("change", function () {
    if (this.checked){
        document.head.appendChild(darkMode);
    }
    else{
        darkMode.remove();
    }
});