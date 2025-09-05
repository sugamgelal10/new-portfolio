import express from "express";
import mongoose, { connect } from "mongoose";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sugamgelal:SugamNJR@cluster0.akdcwqd.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("database connection successful");
  } catch (error) {
    console.log("Error connecting Database");
    console.log(error);
  }
};
connectDB();
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  web: String,
  message: String,
});
const Message = mongoose.model("Message", messageSchema);

app.post("/add", async (req, res) => {
  try {
    const message = req.body;
    console.log(message);
    const newMessage = new Message(message);
    console.log(newMessage);
    await newMessage.save();
    return res.status(200).send(newMessage);
  } catch (err) {
    console.log("Error in creating message", err);
  }
});

app.listen(5001, () => {
  console.log("listening on server 5001");
});
