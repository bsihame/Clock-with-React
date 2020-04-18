import React from "react";
import "./App.css";
import Clock from "./components/Clock";

class App extends React.Component {
	state = { showClock: true };
	// handleToggle = () => {
	// 	this.setState((prevState) => ({
	// 		showClock: !prevState.showClock,
	// 	}));
	// };
	render() {
		return (
			<div className="App">
				<h2>Try Our Clock</h2>
				<div className="clock">{this.state.showClock ? <Clock /> : null}</div>
				{/* <button onClick={this.handleToggle}>Toggle Clock</button> */}
			</div>
		);
	}
}

export default App;
