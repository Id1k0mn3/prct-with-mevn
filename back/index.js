const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const PORT = 3000;
const { routes } = require('./src/routes');
const cors = require('cors');

mongoose.connect(
    'mongodb://localhost:27017/menv',
);

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


routes.forEach((route) => {
    app.use(`/api/v1/${route}`, require(`./src/routes/${route}`))
})

http.createServer({}, app).listen(PORT);

console.log(`server${PORT}`)