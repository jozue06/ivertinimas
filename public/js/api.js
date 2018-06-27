'use strict';

import express from 'express';
const router = express.Router();
// import modelFinder from '../middleware/modelSwitch.js';
// router.param('model', modelFinder);

// let sendJSON = (res,data) => {
//   res.statusCode = 200;
//   res.statusMessage = 'OK';
//   res.setHeader('Content-Type', 'application/json');
//   res.write( JSON.stringify(data) );
//   res.end();
// };

router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write('hello');
  res.end();
});

router.get('/new', (req, res) => res.sendFile('new.html', {root: './public'}));


router.get('/ivertinimas', (req, res) => {
  res.sendFile('index.html', {root: './public'});
});



export default router;
