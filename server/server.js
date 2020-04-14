const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./routes/routes');
const path = require('path');

const config = require('./config/config');

const app = express();
app.use(cors());
 
mongoose.connect(config.DB_URL, { useNewUrlParser: true })
    .then(() => console.log('connected to db'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'client/')));

app.use('/api', routes);

app.listen(config.PORT, () => console.log(`LISTENING ON PORT ${config.PORT}`));

