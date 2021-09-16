
const routeFindTodos = require('express').Router();

const controllerFindTodos = require('../controllers/findTodos');

routeFindTodos.get('/',controllerFindTodos.showTodos);
routeFindTodos.post('/create',controllerFindTodos.addTodos);
routeFindTodos.get('/:id', controllerFindTodos.showId);
routeFindTodos.get('/delete/:id',controllerFindTodos.delete);
routeFindTodos.post('/update/:id',controllerFindTodos.update);

module.exports = routeFindTodos;





