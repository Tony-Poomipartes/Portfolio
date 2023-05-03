require('dotenv').config();
const express = require('express');
const app = express();
const router = require("./app/router/router");
const middleware404 = require('./middlewares/middleware404');

app.set('view engine', 'ejs');
app.set("views", './app/views');

const PORT = process.env.PORT || 3000;


const path = require('path');
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));
// app.use(express.static(__dirname + './../public'));
// app.use(express.static("./../public"));
app.use(router);
app.use(middleware404);
app.listen(PORT, () => {
console.log(`🚀 Server ready : http://localhost:${PORT}`);
});

