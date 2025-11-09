import Note from "../models/Note.js";

export async function deleteNote(req, res) {
  // This is just the controller/actual function
  res.status(200).json({ message: "Note updated successfully!" });
}

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find(); // use {} if filter needed.
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in CONTROLLER: getAllNotes()", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
