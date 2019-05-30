import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter/Counter';

const users = ['Joe', 'Justin', 'Billy', 'Cindy'];

// Class based component
class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className={'container'}>
				<Counter auto={false} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
