const {
    todos
} = require('../models');

class todosController {
    static showTodos(req, res) {
        todos.findAll()
            .then(todoss => {
                // res.json(todoss)
                res.render('todos.ejs', {
                    todoss
                });
            })
            .catch(err => {
                res.json(err)
            })
    }

    static addTodos(req, res) {
        const {
            task,
            status
        } = req.body;
        todos.create({
                task,
                status,
            })
            .then(user => {
                res.json(user);
            })
            .catch(err => {
                res.json(err);
            })
    }
    static showId(req, res) {
        const id = +req.params.id;
        todos.findByPk(id)
            .then(user => {
                if (user) {
                    res.json(user)
                } else {
                    throw {
                        message: 'user not fond'
                    }
                }
            })
            .catch(err => {
                res.json(err);
            })
    }
    static delete(req, res) {
        const id = +req.params.id;

        todos.destroy({
                where: {
                    id
                }
            })
            .then(result => {
                if (result) {
                    res.json({
                        message: 'id has been delete'
                    })
                } else {
                    throw {
                        message: 'id not delete'
                    }
                }

            })
            .catch(err => {
                res.json(err);
            })
    }
    static update(req, res) {
        const id = +req.params.id;
        const {
            task,
            status
        } = req.body;

        todos.update({
                task,
                status,
            }, {
                where: {
                    id
                }
            })
            .then(user => {
                if (user) {
                    res.json({
                        message: 'id has been update'
                    })
                } else {
                    throw {
                        message: 'id not update'
                    }
                }
            })
            .catch(err => {
                req.json(err);
            })
    }

}

module.exports = todosController;