import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';

import NavBar from './components/NavBar';
import TodoList from './components/TodoList';
import ItemModal from './components/ItemModal';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<Container>
					<ItemModal />
					<TodoList />
				</Container>
			</div>
		);
	}
}

export default App;
