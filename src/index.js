import App from "./App"

const root = document.getElementById("root");

root.innerHTML = `
    <h1>Web Tooling Starter</h1>
    <h2>${App({name: "Rohan"})}</h2>
`