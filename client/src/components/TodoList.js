import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import uuid from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItems, addItem, deleteItem } from '../actions/itemActions';

class TodoList extends Component {
	componentDidMount() {
		this.props.getItems();
	}

	handleAddItem = () => {
		const name = prompt('Enter Item');
		if (name) this.props.addItem({ id: uuid(), name });
	};

	handleDeleteItem = id => {
		this.props.deleteItem(id);
	};

	render() {
		const { items } = this.props;
		return (
			<div>
				<ListGroup className="todo-list">
					{items.map(({ id, text }) => (
						<ListGroupItem key={id}>
							<Button
								className="remove-btn"
								color="danger"
								size="sm"
								style={{ marginRight: '0.5rem' }}
								onClick={() => this.handleDeleteItem(id)}>
								&times;
							</Button>
							{text}
						</ListGroupItem>
					))}
				</ListGroup>
			</div>
		);
	}
}

TodoList.propTypes = {
	getItems: PropTypes.func.isRequired,
	items: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	items: state.items
});

export default connect(
	mapStateToProps,
	{ getItems, addItem, deleteItem }
)(TodoList);
