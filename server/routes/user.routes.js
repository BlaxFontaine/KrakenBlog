/*let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mid = require('../middleware');

let user = require('../models/user');

router.route('/create').post((req, res, next) => {
    user.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/').get((req, res) => {
    user.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/edit/:id').get((req, res) => {
    user.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route('/update/:id').put((req, res, next) => {
    user.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('User updated successfully !')
        }
    })
})

router.route('/delete/:id').delete((req, res, next) => {
    user.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;*/