// @flow
'use strict';

require('dotenv').config();

require('babel-register');

// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI);

// Require our main app file and start the web server up
require('./public/app').start(process.env.PORT);
