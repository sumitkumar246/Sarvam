import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Contact from "./models/Contact.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Running...");
});

app.post("/api/enquiry", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    console.log("Saved Data:", newContact);

    res.status(201).json({
      success: true,
      message: "Enquiry saved successfully",
      data: newContact,
    });
  } catch (error) {
    console.log("Save Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Data not saved",
    });
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Error:", err.message));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});