import logo from "./logo.png";

let root;

function init() {
    root = document.getElementById("root");
    root.innerHTML =  `
    <img src="${logo}" alt="icon" />
    <h1>Web Tooling Starter</h1>
    <button id="about">About</button>
    <div id="route"></div>
`
}

init();

const btn = document.getElementById("about");

btn.addEventListener("click", loadAbout);

function loadAbout() {
    import("./App").then(({ default: App }) => {
        const about = App({name: "Rohan"});
        document.getElementById("route").innerHTML = about;
    });
}