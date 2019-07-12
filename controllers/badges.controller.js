const badges = require('../model/badges');
const db = require("../bin/config");

// get list
exports.list = (req, res) => {
    user.find({})
    .exec((err, result) => {
        res.status(200)
        .json({ result, badge: result.badge })
    })
}

// add data
exports.add = (req, res) => {
    let datauser = new badges(req.body)
    console.log(req.body)
    datauser.save( function(err, result) {
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
        
    })
}