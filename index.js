const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/static`));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next) => {
    res.status(200).render('index');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
