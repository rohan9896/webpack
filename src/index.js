import App from "./App";
import logo from "./logo.png";

const root = document.getElementById("root");

root.innerHTML = `
    <img src="${logo}" alt="icon" />
    <h1>Web Tooling Starter</h1>
    <h2>${App({name: "Rohan"})}</h2>
`