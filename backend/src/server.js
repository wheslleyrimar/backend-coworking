const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const app = express();

mongoose.connect(process.env.DATABASEURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.set('trust proxy', 1)
app.disable("x-powered-by");
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

let port = process.env.PORT || 3333;

app.listen(port);
