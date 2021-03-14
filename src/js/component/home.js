import React from "react";

//create your first component
export function TodoList() {
	const [inputValue, setInputValue] = React.useState("");

	const validateInput = () => {
		if (inputValue === "") {
			alert("The input cannot be empty");
		} else {
			alert("All perfect!");
		}
	};

	return (
		<div>
			<div id="myDIV" className="header">
				<h2>Todo list</h2>
				<input
					type="text"
					onChange={e => setInputValue(e.target.value)}
					value={inputValue}
					placeholder="What needs to be done?"
				/>
				<button onClick={validateInput}>Verify</button>
			</div>
			<div id="myDIV" className="header">
				<input type="text" id="myInput" placeholder="Title..." />
				<span onClick="newElement()" className="addBtn">
					Add
				</span>
			</div>
			<div>
				<ul id="myUL">
					<li>Make my bed</li>
					<li className="checked">Wash my hands</li>
					<li>Eat</li>
					<li>GFGFG</li>
				</ul>
			</div>
		</div>
	);
}