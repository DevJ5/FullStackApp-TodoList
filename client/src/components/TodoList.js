import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
// import uuid from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItems, addItem, deleteItem } from '../actions/itemActions';

class TodoList extends Component {
	componentDidMount() {
		this.props.getItems();
		console.log(this.props);
	}

	// handleAddItem = () => {
	// 	const name = prompt('Enter Item');
	// 	if (name) this.props.addItem({ id: uuid(), name });
	// };

	handleDeleteItem = id => {
		console.log(id);
		this.props.deleteItem(id);
	};

	render() {
		const { items, loading } = this.props.item;
		if (loading) return <div className="loader" />;
		return (
			<div>
				<ListGroup className="todo-list">
					{items.map(({ _id, text }) => (
						<ListGroupItem key={_id}>
							<Button
								className="remove-btn"
								color="danger"
								size="sm"
								style={{ marginRight: '0.5rem' }}
								onClick={() => this.handleDeleteItem(_id)}>
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
	deleteItem: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	item: state.item
});

export default connect(
	mapStateToProps,
	{ getItems, addItem, deleteItem }
)(TodoList);
