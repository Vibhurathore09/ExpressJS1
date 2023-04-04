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
const getAllDoc = async () => {
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
};

// Retriving All Document With Specific Fields
const getAllDocSpecificField = async () => {
  // const result = await studentModel.find().select('name age'); Include
  // const result = await studentModel.find().select(['name' , 'age']); //Include
  const result = await studentModel.find().select(["-name", "-age"]); //Exclude both ways [] , '' also works
  // console.log(result);
};

// Retrieve Single Document
const getSingleDoc = async () => {
  const result = await studentModel.findById("642c40156eb2e58d98ab47f0");
  console.log(result);
  // console.log(result._id.getTimestamp())
};

// Reterive Single Document with specific fields
const getSingleDocSpecificField = async () => {
  const result = await studentModel.findById("642c40156eb2e58d98ab47f0").select("name age");
  console.log(result);
  // console.log(result._id.getTimestamp())
};

// Reterive Document by Fields
const getDocByField = async () => {
  const result = await studentModel.find({name : "Vibhu"});
  // console.log(result);
};

// Reterive Document by Field with Specific Field

const getDocByFieldSpecificField = async () => {
  const result = await studentModel.find({name : "Vibhu"}).select('name age');
  // console.log(result);
};

//  reterive Limited Document
const getLimitedDoc = async () => {
  const result = await studentModel.find().limit(2);
  // console.log(result);
};

// Reterieve Skip Document
const getSkipDoc = async () =>{
  const result = await studentModel.find().skip(1);
  console.log(result);
}

// Count Documents
const getDocCount = async () =>{
  const result = await studentModel.find().count();
  console.log(result);

};
// Count Documents
const getSortedDoc = async () =>{
  // const result = await studentModel.find().sort({age : 1}); //Ascending
  const result = await studentModel.find().sort({age : -1}); //Descending

  console.log(result);

};

// Comparison Query Operator
const compDoc = async()=>{
  // const result = await studentModel.find({age : {$gt : 30}}); //Age greater than 25
  // const result = await studentModel.find({age : {$gte : 30}}); //Age greater equal than to 25
  // const result = await studentModel.find({age : {$lte : 30}}); //Age lower than 25
  // const result = await studentModel.find({age : {$le : 30}}); //Age lower than equal to 25
  // const result = /await studentModel.find({age : {$ne: 33}}) // Age not equal too
  // const result = await studentModel.find({age : {$in: [20 ,33]}}) // Age not equal too
  const result = await studentModel.find({age : {$nin: [20 ,33]}}) // Age not equal too
  console.log(result);
}

// Logical Query Operator
const logDoc = async () =>{
  // const result = await studentModel.find({$and : [{age : 27} , {fees : 6500.4}]})
  const result = await studentModel.find({$or : [{age : 33} , {fees : 6500.4}]})
  console.log(result);
}


export { getAllDoc, getAllDocSpecificField, getSingleDoc , getSingleDocSpecificField ,getDocByField ,getDocByFieldSpecificField ,
getLimitedDoc , getSkipDoc, getDocCount , getSortedDoc,compDoc , logDoc};
