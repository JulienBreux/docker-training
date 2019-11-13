const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    console.info("Request /");
    res.send('Hello World!');
});

app.listen(port, () => console.log(`App listening on port ${port}!`))
