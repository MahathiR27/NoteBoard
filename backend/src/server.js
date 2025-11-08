import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/test-api/", notesRoutes); // test-api/notes er kono url ashle oi file e pathaye dibe

// app.get("/test-api/", (req,res)=>{ // default parameters by express
//   res.send("Test API e ki ashe dekhi with nodemon."); // Sends response directly to the website
// })

// app.post("/test-api/notes",(req,res)=>{  // 201/post: Create something
//   res.status(201).json({message: "Note created successfully!"});
// })

// app.put("/test-api/notes/:id",(req,res)=>{  // 200/put: Update something, :id is dynamic to ensure what to update
//   res.status(200).json({message: "Note updated successfully!"});
// })

// app.delete("/test-api/notes/:id",(req,res)=>{  // 200/delete: Delete something, :id is dynamic to ensure what to update
//   res.status(200).json({message: "Note deleted successfully!"});
// })

app.listen(5001, ()=>{
  console.log("Server started on: http://localhost:5001/");
})
