const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello Granita');
})

app.listen(port, ()=> console.log(`App listen on port ${port}`))