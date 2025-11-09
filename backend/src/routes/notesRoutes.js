import express from "express";
import {
  getAllNotes,
  createNotes,
  updateNotes,
  deleteNotes,
} from "../controllers/notesController.js"; // Must add all of the function names here

const router = express.Router();
export default router;

router.get("/", (req, res) => {
  // default parameters by express, only /test-api/ hoile e ei file e ashbe so pura url ar likhte hoy na. common part badh
  res.send("Test API e ki ashe dekhi with nodemon."); // Sends response directly to the website
});

router.get("/notes", getAllNotes);

router.post("/notes", createNotes);

router.put("/notes/:id", updateNotes); // Used controller. 200/put: Update something, :id is dynamic to ensure what to update

router.delete("/notes/:id", deleteNotes);
