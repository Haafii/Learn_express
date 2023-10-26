const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')



app.use([logger, authorize]) //order maters


app.get('/', (req, res) => {
    res.send('Home Page');

}) 

app.get('/about', (req, res) => {
    res.send('About Page')

})

app.listen(5009, () => {
    console.log('server is listening on port 5009..');
})