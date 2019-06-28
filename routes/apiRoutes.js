const db = require("../models/index");

module.exports = (app) => {
    app.post("/api/create", (req, res) => {
        db.Todo.create({
            description: req.body.description,
            responsible: req.body.responsible,
            priority: req.body.priority,
            completed: req.body.completed
        }).then(dbResponse => {
            res.json(dbResponse);
        }).catch(err => {
            if(err){
                console.log(err);
            }
        });
    });

    app.get("/api/get", (req, res) => {
        db.Todo.find({}).then(dbResponse => {
            res.json(dbResponse);
        }).catch(err => {
            if(err){
                console.log(err);
            }
        });
    });

    app.put("/api/update/:id", (req, res) => {
        db.Todo.updateOne(
            {
                _id: req.params.id
            },
            {
                description: req.body.description,
                responsible: req.body.responsible,
                priority: req.body.priority,
                completed: req.body.completed
            }
        ).then(dbResponse => {
            res.json(dbResponse);
        }).catch(err => {
            if(err){
                console.log(err)
            }
        });
    });

    app.delete("/api/delete/:id", (req, res) => {
        db.Todo.deleteOne({
            _id: req.params.id
        }).then(dbResponse => {
            res.json(dbResponse)
        }).catch(err => {
            if(err){
                console.log(err);
            }
        });
    });
}