import { Schema, model, Types } from "mongoose";

const schema = new Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  todos: [{
    type: Types.ObjectId,
    ref: 'Todo'
  }]
})

export default model('User', schema);