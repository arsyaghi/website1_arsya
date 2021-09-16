const routes = require('express').Router();
routes.get('/', (req, res) => {
    //  res.json({
    //      halaman : 'home'
    //  })
    res.render('index.ejs');
})

const findTodos = require('./findTodos');
routes.use('/todos', findTodos);

module.exports = routes;