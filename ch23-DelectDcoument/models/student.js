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

//  Delete Document
const deleteDocByID = async (id) => {
  try {
    const result = await studentModel.findByIdAndDelete(id);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// Delete One Doc
const DeleteOneDoc = async (id) => {
  try {
    const result = await studentModel.deleteOne(id);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// Delete Many Doc
const DeleteManyDoc = async (n) =>{
  try {
    const result = await studentModel.deleteMany({
      name : n
    });
    console.log(result);
  } catch (error) {
    
  }
}
export { deleteDocByID , DeleteOneDoc , DeleteManyDoc };
