const {validationResult} = require('express-validator');
const fs = require("fs");
const path = require("path");

const colores = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/colores.json"), "utf-8"));

module.exports = {
    getMainPage: (req, res) => {

        req.session.userData = {
            color: "white",
        }
        
        res.render('index' , {session: req.session, colores});
    },
    getData: (req, res) => {

        let errors = validationResult(req);

        if(errors.isEmpty()){
            req.session.userData = {
                name: req.body.name,
                color: req.body.color,
                colorTexto: colores.find(color => color.valor == req.body.color).texto,
                mail: req.body.mail,
                age: req.body.age,
            }

            res.render('index', {session: req.session, colores})
        } else {
            res.render('index', {
                errors: errors.mapped(), 
                session: req.session,
                old: req.body,
                colores})
        }
    },
    gracias: (req, res) => {

        res.render('gracias', {session: req.session})
    }
}