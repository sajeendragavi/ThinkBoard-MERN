import mongoose from "mongoose";
import Note from "../models/Note.js";
// 1 st step - You need to create a schema
// 2 nd step - you would create a model based off of that schema

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
    { timestamps: true}  //createdAt, UpdatedAt

    const Note = mongoose.model("Note", noteSchema)

    export default Note;

); 