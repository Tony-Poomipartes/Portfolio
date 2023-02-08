require('dotenv').config();
const debug = require('debug')('portfolio:server');
const express = require('express');
const router = require("./app/router/router");
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(__dirname + '/public'));

app.use(router);

app.listen(PORT, () => {
console.log(`🚀 Server ready : http://localhost:${PORT}`);
});
