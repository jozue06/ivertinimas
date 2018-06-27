'use strict';

const cors = require('cors')
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));

app.use(cors());

app.get('/new', (request, response) => response.sendFile('new.html', {root: './public'}));

app.get('/articles', (request, response) => {
  
    .then(result => response.send(result.rows))
    .catch(console.error);
});

app.post('/articles', (request, response) => {

});

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
