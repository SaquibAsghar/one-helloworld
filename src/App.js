import React from "react";
import "./style.css";

import Button from "./Button/Button";


const App = () => {
	return (
		<div>
            <h1>Hello World</h1>
            <Button title= "App Store"/>
            <Button title = "Play Store"/>
            <Button />
		</div>
	);
};


export default App;