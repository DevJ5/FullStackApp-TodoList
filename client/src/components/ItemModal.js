import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import {
	Button,
	Modal,
	ModalHeader,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap';

import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
	state = {
		modal: false
	};

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		if (this.state.text) {
			const todo = { id: uuid(), text: this.state.text };
			this.props.addItem(todo);
			this.setState({
				text: ''
			});
		}
		this.toggle();
	};

	render() {
		return (
			<div>
				<Button
					color="dark"
					onClick={this.toggle}
					style={{ marginBottom: '2rem' }}>
					Add Todo
				</Button>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Add your todo item</ModalHeader>
					<Form onSubmit={this.handleSubmit} style={{ padding: '1rem' }}>
						<FormGroup>
							<Label htmlFor="item">Todo:</Label>
							<Input
								type="text"
								name="text"
								id="todo-item"
								value={this.state.text || ''}
								placeholder="Enter a todo item"
								onChange={this.handleChange}
							/>
						</FormGroup>
						<Button color="secondary" onClick={this.toggle}>
							Cancel
						</Button>{' '}
						<Button color="primary">Submit</Button>
					</Form>
				</Modal>
			</div>
		);
	}
}

export default connect(
	null,
	{ addItem }
)(ItemModal);
