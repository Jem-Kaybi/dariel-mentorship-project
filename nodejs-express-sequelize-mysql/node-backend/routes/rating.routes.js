const express = require('express');
const app = express();
 
const ratingRoute = express.Router();
let Rating = require('../models/Rating');
 
// Add Rating
ratingRoute.route('/add-rating').post((req, res, next) => {
    Rating.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});
 
// Get all Rating
ratingRoute.route('/').get((req, res) => {
    Rating.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
 
// Get Rating
ratingRoute.route('/read-rating/:id').get((req, res) => {
    Rating.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
 
 
// Update Rating
ratingRoute.route('/update-rating/:id').put((req, res, next) => {
    Rating.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Rating updated successfully!')
        }
    })
})
 
// Delete Rating
ratingRoute.route('/delete-rating/:id').delete((req, res, next) => {
    Rating.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
 
module.exports = ratingRoute;