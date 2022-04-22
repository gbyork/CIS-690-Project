let User = require("../models/userSchema");

exports.get_users = function (req, res) {
    User.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.render("./user/users", { User: data });
        }
    })
}
//Create
exports.get_create_users = function (req, res) {
    res.render('user/create');
}

exports.get_completed = function (req, res) {
    res.render('user/creation');
}

exports.post_users = function (req, res) {

    let newUser = new User({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Role: req.body.Role
    });
    newUser.Password = newUser.generateHash(req.body.Password);
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

exports.delete_user = function (req, res) {
    User.findOneAndDelete({ _id: req.query.id }, function (err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/user");
        }
    });
};

exports.get_update_user = function (req, res) {
    User.findOne({ _id: req.query.id }, function (err, UserData) {
        if(err) {
            console.log(err);
        } else {
            res.render("user/update", { data: UserData });
        }
    });
};



exports.post_update_user = function (req, res) {

    const UpdatedData = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Role: req.body.Role
    }
    if (req.body.Password) {
        let temp = new User();
        UpdatedData.Password = temp.generateHash(req.body.Password);
      }
    User.findOneAndUpdate({ _id: req.body.id }, UpdatedData, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/user");
        }
    });
};