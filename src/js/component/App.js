import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: "",
			list: []
		};
		this.onKeyUp = this.onKeyUp.bind(this);
	}

	updateInput(key, value) {
		this.setState({
			[key]: value
		});
	}
	addItem() {
		const newItem = {
			id: 1 + Math.random(),
			value: this.state.newItem.slice()
		};

		const list = [...this.state.list];

		list.push(newItem);

		this.setState({
			list,
			newItem: ""
		});
	}

	delItem(id) {
		const list = [...this.state.list];

		const updatedList = list.filter(item => item.id !== id);

		this.setState({ list: updatedList });
	}

	onKeyUp(event) {
		if (event.charCode === 13) {
			this.addItem();
		}
	}

	render() {
		return (
			<div className="App">
				<div>
					<div className="header">
						<h1>todos</h1>
						<input
							type="text"
							placeholder="What needs to be done?"
							value={this.state.newItem}
							onKeyPress={this.onKeyUp}
							onChange={e =>
								this.updateInput("newItem", e.target.value)
							}
						/>
					</div>
					<div>
						<ul>
							{this.state.list.map(item => {
								return (
									<li key={item.id}>
										{item.value}
										<button
											className="delBtn"
											onClick={() =>
												this.delItem(item.id)
											}>
											X
										</button>
									</li>
								);
							})}
						</ul>
						<ul>
							<li className="cantidad">
								You have {this.state.list.length} items left
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
