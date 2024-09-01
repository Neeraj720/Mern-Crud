import mongoose from "mongoose"
import uniqueValidator from 'mongoose-unique-validator'
const userSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    lowercase: true,
    trim: true,
    required: [true, "Name is Required"]
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: [true, "Mobile is Required"],
    maxlength: 10,
    minlength: 10,
    trim: true,
  },
})
userSchema.plugin(uniqueValidator)

const userSchemaModel = mongoose.model('user_collections',userSchema)
export default userSchemaModel