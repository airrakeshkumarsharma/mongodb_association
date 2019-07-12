const db = require("../bin/config");
const user = require('../models/user_model');

// user get list
exports.list = (req, res) => {
    user.find({}).populate('badge')
      .exec((err, result) => {
        console.log(result)
        res.status(200).json({ result, badge: result.badge})
    })
}

// insert one
exports.add = (req, res) => {
    let datauser = new user(req.body)
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


exports.putdata = (req, res) => {
    console.log('put request')
}