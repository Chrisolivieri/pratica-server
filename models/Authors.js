import { Schema, model } from "mongoose";

//schema servono 2 argomenti: new Schema({},{})
const authorSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      // per renderla unica
      unique: true,
      // per rendere obbligatoria
      required: true,
    },
    age: {
      type: Number,
      min : 0,
      max: 100,

    },
    role: String,
    approved: Boolean,
  },
  {
    collection: "authors",
  }
);

// mettiamo il model in una variabile e la esportiamo
const Author = model("Author", authorSchema);

export default Author;
