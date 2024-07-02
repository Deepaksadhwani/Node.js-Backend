/* whenever you send request from server to browser with the help of morgan we can get additional information  */


const express = require('express');
const app = express();
const morgan = require('morgan')


app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('hey')
})

app.listen(3000);