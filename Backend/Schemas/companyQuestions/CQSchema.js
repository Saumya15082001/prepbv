import mongoose from "mongoose";

const Schema = mongoose.Schema;
const CQSchema = new Schema({
  Company:{type:String},
  Problem: { type: String },
  Done: { type: String },
  URL: { type: String },
});
export default CQSchema;
