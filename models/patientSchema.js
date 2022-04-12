const mongoose = require('mongoose');
const { Schema } = mongoose;
const patientSchema = new Schema({
  CreatorID: { type: String, required: true },
  CreatorName: { type: String, required: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Birthdate: { type: Date, required: true },
  Zipcode: { type: String, required: true },
  State: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  CreateDate: { type: Date, required: true },
  InsuranceType: { type: String, required: true },
  TestType: { type: String, required: true },
  DoctorService: { type: String, required: true },
  LabName: { type: String, required: true },
  SampleStatus: { type: String, required: true }
});
const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;

