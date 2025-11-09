import Note from "../models/Note.js";

export async function deleteNote(req, res) {
  // This is just the controller/actual function
  res.status(200).json({ message: "Note updated successfully!" });
}

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find(); // use {} if filter needed. or .sort({createdAt:-1}) for reverse order
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in CONTROLLER: getAllNotes()", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export const createNotes = async (req, res) => {
  // Same Function just in arrow format
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title: title, content: content });

    await newNote.save();
    res.status(201).json({ message: "Note created successfully!" });
    // 201/post: Create something
  } catch (error) {
    console.error("Error in CONTROLLER: createNotes()", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    }); // .id as we took the input as :id from the link
    if (!updatedNote) {
      // Jodi note na thake taile.
      res.status(404).json({ message: "Note not found!" });
      console.error("Note not found!");
    }
    res.status(200).json({ message: `${title} note updates successfully!` });
    // 200/post: Create something
  } catch (error) {
    console.error("Error in CONTROLLER: updateNotes()", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const deletedNote = await Note.findByIdAnddelete(req.params.id, {
      title,
      content,
    }); // .id as we took the input as :id from the link
    if (!deletedNote) {
      // Jodi note na thake taile.
      res.status(404).json({ message: "Note not found!" });
      console.error("Note not found!");
    }
    res.status(200).json({ message: `${title} note deletes successfully!` });
    // 200/post: Create something
  } catch (error) {
    console.error("Error in CONTROLLER: deleteNotes()", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
