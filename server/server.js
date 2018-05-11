// server business
const express = require('express');

const bodyParser = require('body-parser');

const movieRouter = require('./routes/movies.router');
const genreRouter = require('./routes/genres.router');

const app = express();
const PORT = process.env.PORT | 5000;



//for the app
app.use(bodyParser.json());
//for postman testing
app.use(bodyParser.urlencoded({ extended: true }));
//backend and frontend are friends
app.use(express.static('server/public'));

//new movie delivery to db
app.use('/movies', movieRouter);
app.use('/genres', genreRouter);


//hey! listen!
app.listen(PORT, () => {
    console.log(`you're listening to PORT ${PORT}`);
});
