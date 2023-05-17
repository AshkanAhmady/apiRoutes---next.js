import mongoose from "mongoose";

// what is model => the type and model of data
// like => todo :=> (title: string, description: string)

// the schema of todos
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Todo || mongoose.model("Todo", todoSchema);
