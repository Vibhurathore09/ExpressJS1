import mongoose from "mongoose";

// Defining Schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 18, max: 50 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => (v) => 5500.5,
  },
  hoobies: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { valeu: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

// console.log(studentSchema.path('age'));
// Compiling Schema
const studentModel = mongoose.model("student", studentSchema);

const createDoc = async (nm , ag , fe , hob , isact , comt) => {
  try {
    // Creating new document
    const studentDoc1 = new studentModel({
      name: "Vibhu",
      age: 33,
      fees: 10000,
      hoobies: ['hob1', 'hob2'],
      isActive: true,
      comments: [{value : 'I ma a comment'}],
      join: Date.now(),
    });
    const studentDoc2 = new studentModel({
      name: "Vibhu",
      age: 33,
      fees: 10000,
      hoobies: ['hob1', 'hob2'],
      isActive: true,
      comments: [{value : 'I ma a comment'}],
      join: Date.now(),
    });
    const studentDoc3 = new studentModel({
      name: "Vibhu",
      age: 33,
      fees: 10000,
      hoobies: ['hob1', 'hob2'],
      isActive: true,
      comments: [{value : 'I ma a comment'}],
      join: Date.now(),
    });

    // Saving document
    const result = await studentModel.insertMany([studentDoc1, studentDoc2, studentDoc3]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// Single document
// const studentDoc = new studentModel({
//   name: nm,
//   age: ag,
//   fees: fe,
//   hoobies: hob,
//   isActive: isact,
//   comments: comt,
//   join: Date.now(),
// });

export default createDoc;
