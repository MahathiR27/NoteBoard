import express from "express";
import { getAllNotes, deleteNote } from "../controllers/notesController.js"; // Must add all of the function names here

const router = express.Router();
export default router;

router.get("/", (req, res) => {
  // default parameters by express, only /test-api/ hoile e ei file e ashbe so pura url ar likhte hoy na. common part badh
  res.send("Test API e ki ashe dekhi with nodemon."); // Sends response directly to the website
});

router.get("/allnotes", getAllNotes);

router.post("/notes", (req, res) => {
  // 201/post: Create something
  res.status(201).json({ message: "Note created successfully!" });
});

router.put("/notes/:id", deleteNote); // Used controller. 200/put: Update something, :id is dynamic to ensure what to update

router.delete("/notes/:id", (req, res) => {
  // 200/delete: Delete something, :id is dynamic to ensure what to update
  res.status(200).json({ message: "Note deleted successfully!" });
});
