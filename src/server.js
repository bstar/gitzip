const express = require('express');
const proxy = require('express-http-proxy');


const app = express();
const port = 4000;

app.use('/api', proxy('https://api.github.com'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port: ${port}`));
