const express = require('express')
const routes = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal, } = require('../controllers/goalControlers')
 
// routes.get('/', (req, res) => {
//     res.status(200).json({name: "cat", age: 3})
// })
// routes.get('/', getGoals)

// routes.post('/', setGoal)

routes.route('/').get(getGoals).post(setGoal)

// routes.put('/:id', updateGoal)

// routes.delete('/:id', deleteGoal)

routes.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = routes