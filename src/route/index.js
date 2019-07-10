const route = require('express').Router()
const restaurant = require('../models/retaurant')

route.get('/' , (req, res) => {
    return res.json({
        code : 'OK'
    })
})

route.get('/restaurant', async (req, res) => {
    restaurant.find({}, (err, result) => {
        if(err) throw err
        else return res.json({
            code : 200,
            data : result
        })
    })
})

route.post('/restaurant/add', async (req, res) => {
    let body = req.body
    let NewRestaurant = restaurant(body)
    NewRestaurant.save( (err) => {
        if (err) throw err
    })
    return res.json({
        code : 200,
        msg : 'Create success'
    })
})

route.post('/restaurant/edit/:id', (req, res) => {
    let id = req.params.id
    let body = req.body
    restaurant.findByIdAndUpdate(id,{name : body.name}, (err,result) => {
        if (err) throw err
        else return res.json({
            code : 200
        })
    }) 
})

route.post('/restaurant/delete/:id', (req, res) => {
    let id = req.params.id
    restaurant.findByIdAndRemove(id, (err) => {
        if(err) throw err
        else return res.json({
            code : 200,
            msg : 'delete success'
        })
    })
})
module.exports = route
