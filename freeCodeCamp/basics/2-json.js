const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.json([{ name: 'Hafi' }, { name: 'avi' }]);
})
app.listen(5009, () => {
    console.log('server is listening on port 5009...');
})