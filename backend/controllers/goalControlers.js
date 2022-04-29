const asyncHandler = require('express-async-handler')
// @desc Get goals
// @route GET /api/goals
// @access private

const getGoals = asyncHandler(async (req, res) => {
    console.log(req.body.text);
    if (!req.body.text) {
        // res.status(400).json({message: "plz add text field"}) // express have error handler like throw
        throw new Error('plz add text field')
    }
    console.log(req.body);
    res.status(200).json({method: "get", message: ` get goals `})
})

// @desc Set goal
// @route POST /api/goals
// @access private

const setGoal = asyncHandler(async (req, res) => {
    res.status(200).json({method: "post", name: "cat", age: 3})
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access private

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({method: "put", name: "cat", age: 3, message: `update goal ${req.params.id}`})
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access private

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({method: "delete", name: "cat", age: 3, message: `delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}