import mongoose from "mongoose";

// 1. Create a schema
// 2. Model based on the schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Mongodb auto timestamp diye dibe
);

const Note = mongoose.model("Note", noteSchema);
export default Note;