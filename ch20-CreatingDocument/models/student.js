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
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

// console.log(studentSchema.path('age'));
// Compiling Schema
const studentModel = mongoose.model("student", studentSchema);

// Retriving document
const getAllDoc = async () =>{
  const result = await studentModel.find();
  // console.log(result);
  // result.forEach((doc) => {
  //   console.log(
  //     doc.name,
  //     doc.age,
  //     doc.fees,
  //     doc.hoobies[0],
  //     doc.hoobies[1],
  //     doc.isActive,
  //     doc.join,
  //     doc.comments[0].value,
  //     doc.comments[0].publish,
  //   );
  // });
}


// Retriving All Document With Specific Fields
const getAllDocSpecificField = async () =>{
  // const result = await studentModel.find().select('name age'); Include
  // const result = await studentModel.find().select(['name' , 'age']); //Include
  const result = await studentModel.find().select(['-name' , '-age']); //Exclude both ways [] , '' also works
  console.log(result);

}

export  {getAllDoc , getAllDocSpecificField};
