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
    const studentDoc = new studentModel({
      name: nm,
      age: ag,
      fees: fe,
      hoobies: hob,
      isActive: isact,
      comments: comt,
      join: Date.now(),
    });

    // Saving document
    const result = await studentDoc.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export default createDoc;
