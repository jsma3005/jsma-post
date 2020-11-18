const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3000;
require('dotenv/config');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
app.use('/posts', postsRoute);
app.use('/users', usersRoute);

// Routes
app.get('/', (req, res) =>{
    res.send('Welcome to JSMA REST API! We have 2 routes: posts and users');
})


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION || 'mongodb+srv://jsma3005:1233214a@cluster0.xyudb.mongodb.net/jsma3005?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('connected to DB')
);

// How to we start listening to the server
app.listen(process.env.PORT || port, () => {
    console.log('Connected');
});
