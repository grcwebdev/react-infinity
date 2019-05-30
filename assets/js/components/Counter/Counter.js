import React, { Component } from 'react';
import Button from './Button';

export default class Counter extends Component {
	constructor() {
		super();
		this.state = {
			currentCount: 0
		};
	}

	componentWillMount() {
		console.log('componentWillMount started');
	}

	componentDidMount() {
		if (this.props.auto) {
			this.setState(
				{
					status: !status
				},
				() => {
					this.autoCount();
				}
			);
		}
	}

	addFunction = () => {
		this.setState(
			{
				currentCount: this.state.currentCount + 1
			},
			() => {
				console.log(this.state.currentCount);
			}
		);
	};

	minusFunction = () => {
		this.setState(
			{
				currentCount: this.state.currentCount - 1
			},
			() => {
				console.log(this.state.currentCount);
			}
		);
	};

	autoCount = () => {
		setInterval(() => {
			this.setState({
				currentCount: this.state.currentCount + 1
			});
		}, 1000);
	};

	render() {
		const styleCounterComp = {
			width: '100%',
			maxWidth: '400px',
			margin: '0 auto'
		};

		const styleNumber = {
			border: '3px solid black',
			padding: '20px',
			fontSize: '2rem',
			fontWeight: '900',
			textAlign: 'center'
		};

		const styleButtons = {
			display: this.props.auto ? 'none' : 'flex'
		};

		return (
			<div id={'counter-comp'} style={styleCounterComp}>
				<div className={'number'} style={styleNumber}>
					{this.state.currentCount}
				</div>
				<div className={'buttons'} style={styleButtons}>
					<Button
						action="minus"
						hoverColor={'red'}
						backgroundColor={'black'}
						fontColor={'white'}
						trigger={this.minusFunction}
					>
						-
					</Button>
					<Button
						action="plus"
						hoverColor={'green'}
						backgroundColor={'white'}
						fontColor={'black'}
						trigger={this.addFunction}
					>
						+
					</Button>
				</div>
			</div>
		);
	}
}
