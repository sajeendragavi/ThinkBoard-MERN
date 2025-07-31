import express from "express";
import { getAllNotes, createNote, deleteNote, updateNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/",createNote);

router.put("/:id", updateNote);

router.delete("/:ids", deleteNote);

export default router;

