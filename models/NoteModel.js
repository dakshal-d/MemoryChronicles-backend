const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    day: {type: String, required: true},
    title: { type: String, required: true },
    body: { type: String, required: true },
    user: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const NoteModel = mongoose.model("note", noteSchema);

module.exports = {
  NoteModel,
};


// const mongoose=require("mongoose");

// const noteSchema=mongoose.Schema(
//   {
//     day:{type:String},
//     title:{type:String},
//     body:{type:String},
//     user:{type:String},

//   },
// );
// const NoteModel=mongoose.model("note",noteSchema);

// module.exports={
//   NoteModel,
// };