const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

app.get('/', (req, res) => {
    res.send(`hello world`);
})
// app.get('/api/goals', (req, res) => {
//     res.status(201).json({name: "cat", age: 3})
// })
// console.log('hi',dotenv);

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))


