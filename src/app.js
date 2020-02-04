const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bearerToken = require('express-bearer-token');
const cookieParser = require('cookie-parser');




app.use(bodyParser.json());
app.use(cookieParser());
app.use(bearerToken());


app.use(require('./router.js'));

const http = require('http').Server(app);
const port = process.env.PORT || 8080;
http.listen(port, async () => {
    console.log(`http server listening on *:${port}`);
});



module.exports = app;