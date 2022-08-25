module.exports = app => {
    const user = require("../controllers/Users.js");

    var router = require("express").Router();

    router.get('/users', user.getUsers);
    router.post('/users', user.Register);
    router.post('/login', user.Login);
    router.delete('/logout', user.Logout);

    app.use('/',router);
}