const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()
const port = process.env.PORT || 5000;

// Middleware //
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB //
mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Connected to the DB')
)

// Routes //
app.use('/entries', require('./routes/entryRouter.js'))

app.use(express.static(path.join(__dirname, "client", "build")))


// Error handler //
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


// Server listen //
app.listen(port, () => {
    console.log('The server is running on port 5000')
})