// server business

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT | 5000;



//for the app
app.use(bodyParser.json());
//for postman testing
app.use(bodyParser.urlencoded({extended:true}));
//backend and frontend are friends
app.use(express.static('server/public'));



//the people's station
app.listen(PORT, () => {
    console.log(`you're listening to PORT ${PORT}`);
});
