import mongoose, { trusted } from "mongoose";

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

// Compiling Schema
const studentModel = mongoose.model("student", studentSchema);



// Update Document
const updateDocById = async () => {
  try {
    const result = await studentModel.findByIdAndUpdate(
      "642c40156eb2e58d98ab47f0",
      {
        name: "Sammer",
      },
      {
        returnDocument: "after",
      }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const upDateOneDoc = async (id) => {
  try {
    const result = await studentModel.updateOne(
      { _id: id },
      { name: "Sammer" }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
const I = async (id) => {
  try {
    const result = await studentModel.updateOne(
      { _id: id },
      { name: "Subodh" },
      { upsert: true }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export { updateDocById, upDateOneDoc , I };
