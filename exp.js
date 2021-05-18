const express = require('express');
const port = 8080;

const app = express();
app.set('view engine', 'hbs');


app.get('/', (request, response) => {
    response.render('index', {
        pageTitle: 'node js',
        pageBody: 'E e eluwina aha eluwina'
    });


});

app.listen(port);


