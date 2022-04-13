let Patient = require("../models/patientSchema");

exports.get_patient = function (req, res) {
    Patient.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.render("./patient/patients", { Patient: data });
        }
    })
}

//CREATE - C
exports.get_create_patient = function (req, res) {
    res.render('patient/create');
}

exports.get_completed = function (req, res) {
    res.render('patient/creation');
}

exports.post_patient = function (req, res) {

    let newPatient = new Patient({
        CreatorID: req.body.CreatorID,
        CreatorName: req.body.CreatorName,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Birthdate: req.body.Birthdate,
        Zipcode: req.body.Zipcode,
        State: req.body.State,
        PhoneNumber: req.body.PhoneNumber,
        CreateDate: req.body.CreateDate,
        InsuranceType: req.body.InsuranceType,
        TestType: req.body.TestType,
        DoctorService: req.body.DoctorService,
        LabName: req.body.LabName,
        SampleStatus: req.body.SampleStatus
    });

    newPatient.save(function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            // saved!
            res.render('patient/creation');
        }
    });
}

exports.delete_patient = function (req, res) {
    Patient.findOneAndDelete({ _id: req.query.id }, function (err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/patient");
        }
    });
};

exports.get_update_patient = function (req, res) {
    Patient.findOne({ _id: req.query.id }, function (err, PatientData) {
        if(err) {
            console.log(err);
        } else {
            res.render("patient/update", { data: PatientData });
        }
    });
};

exports.post_update_patient = function (req, res) {

    const UpdatedData = {
        CreatorID: req.body.CreatorID,
        CreatorName: req.body.CreatorName,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Birthdate: req.body.Birthdate,
        Zipcode: req.body.Zipcode,
        State: req.body.State,
        PhoneNumber: req.body.PhoneNumber,
        CreateDate: req.body.CreateDate,
        InsuranceType: req.body.InsuranceType,
        TestType: req.body.TestType,
        DoctorService: req.body.DoctorService,
        LabName: req.body.LabName,
        SampleStatus: req.body.SampleStatus
    }

    Patient.findOneAndUpdate({ _id: req.body.id }, UpdatedData, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/patient");
        }
    });
};