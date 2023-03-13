const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require("cookie-parser");


const port= process.env.PORT || 3000; 


app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: "secreto",
    resave: false,
    saveUninitialized: true
}))

/* Template engine config */
app.set('view engine', 'ejs');
app.set('views', "./src/views");

/* Routers */
const mainRouter = require('./routes/main');

/* Routers Middlewares */
app.use('/', mainRouter);

app.listen(port, () => {
    console.log(`servidor levantado en http://localhost:${port}`);
    }
);