var express = require('express');
var router = express.Router();
var User = require('../../models/user');



module.exports = function (passport) {
    router.post('/register', function (req, res) {
        var body = req.body,
            username = body.username,
            password = body.password,
            name = body.name,
            phone = body.phone,
            street = body.street,
            city = body.city,
            state = body.state,
            zip = body.zip,
            email = body.email,
            age = body.age,
            date = body.date
            
        User.findOne({
            username: username
        }, function (err, doc) {
            if (err) {
                res.status(500).send('error occured')
            } else {
                if (doc) {
                    res.status(500).send('Username already exists')
                } else {
                    var record = new User()
                    record.username = username;
                    record.password = record.hashPassword(password)
                    record.save(function (err, user) {
                        if (err) {
                            res.status(500).send('db error')
                        } else {
                            res.redirect('/users/:userid')
                        }
                    })
                }
            }
        })
    });


    router.post('/', passport.authenticate('local', {
        failureRedirect: '/',
        successRedirect: '/users/:userid',
    }), function (req, res) {
        res.send('hey')
    })
    return router;
};