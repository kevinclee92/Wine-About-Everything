var express = require('express');
var router = express.Router();
var User = require('../../models/user');



module.exports = function (passport) {
    router.post('/api/users', function (req, res) {
        var body = req.body,
            username = body.username,
            password = body.password,
            name = body.name,
            phone = body.phone,
            street = body.street,
            city = body.city,
            state = body.state,
            zipcode = body.zipcode,
            email = body.email,
            age = body.age,
            image = body.image,
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
                    record.password = record.hashPassword(password);
                    record.name = name;
                    record.phone = phone;
                    record.street = street;
                    record.city = city;
                    record.state = state;
                    record.zipcode = zipcode;
                    record.email = email;
                    record.age = age;
                    record.image = image;
                    record.date = date;

                    record.save(function (err, user) {
                        if (err) {
                            res.status(500).send('db error')
                        } else {
                            res.redirect('/users/' + user.userid)
                        }
                    })
                }
            }
        })
    });

};