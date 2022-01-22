import _ from "lodash";
import "./App.css";
console.log("sdfv");

const App = ({ name }) => {
	return `
    <h2> ${_.join(["Welcome,", name], " ")} </h2>
    <p> Modern Tooling is cool!!!  </p>
    `;
};

export default App;