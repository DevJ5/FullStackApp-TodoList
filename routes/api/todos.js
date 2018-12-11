const express = require('express');
const router = express.Router();

const Todo = require('../../models/Todo');

router.get('/', (req, res) => {
	Todo.find()
		.sort({ date: -1 })
		.then(todos => res.json(todos))
		.catch(err => res.status(404).json({ message: 'Items do not exist' }));
});

router.post('/', (req, res) => {
	Todo.create(req.body)
		.then(todo => res.json(todo))
		.catch(err =>
			res.status(400).json({ message: 'Please enter a correct item' })
		);
});

router.put('/:id', (req, res) => {
	Todo.findByIdAndUpdate(req.params.id, req.body)
		.then(_ => {
			Todo.findById(req.params.id)
				.then(todo => res.json(todo))
				.catch(err => console.log(err));
		})
		.catch(err => res.status(404).json({ message: 'Item does not exist' }));
});

router.delete('/:id', (req, res) => {
	Todo.findOneAndDelete({ _id: req.params.id })
		.then(todo => res.json({ message: 'Todo deleted' }))
		.catch(err => res.status(404).json({ message: 'Item does not exist' }));
});

module.exports = router;
