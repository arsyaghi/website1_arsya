const express = require('express');
const app = express();
const port = 3000

const routes = require('./routes');
app.use(routes);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/bootstrap-icons'));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.listen(port, () => {
    console.log(`Listening port ${port}`);
})