let User = require("../models/userSchema");

exports.get_users = function (req, res) {
    User.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            
        }
    })
}
//Create
exports.get_create_users = function (req, res) {
    res.render('user/create');
}

exports.post_users = function (req, res) {

    let newUser = new User({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Password:req.body.Password,
        Role: req.body.Role
    });

    newUser.save(function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            // saved!
            res.render('user/creation');
        }
    });
}
