import express from "express";
import mongoose, { Schema, connect } from "mongoose";
import "dotenv/config";
const port=5000
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors());
const categorySchema = new Schema({
  title: String,
  image: String,
  price: Number,
});

const categoryModel = mongoose.model("category", categorySchema);

app.get("/category", async (req, res) => {
  const categories = await categoryModel.find();
  res.send(categories);
});

app.get("/category/:id", async (req, res) => {
  const { id } = req.params;
  const category = await categoryModel.findById(id);
  res.send(category);
});

app.delete("/category/:id", async (req, res) => {
  const { id } = req.params;
  const category = await categoryModel.findByIdAndDelete(id);
  res.send("Bu mehsul silindi ...");
});
app.put("/category/:id", async (req, res) => {
  const { id } = req.params;
  const { title, image, price, description } = req.body;
  const category = await categoryModel.findByIdAndUpdate(id,{title, image, price, description});
  res.send("Bu mehsul update olundu ...");
});

app.post("/category", async (req, res) => {
  const { title, image, price, description } = req.body;
  const newCategory = new categoryModel({ title, image, price, description });
  await newCategory.save();
  res.sendStatus(200).send("Data elave olundu");
});

app.listen(port, () => {
  console.log(`this website runninh port ${port}`);
});

connect("mongodb+srv://yusif:yusif123@cluster0.lowfcp2.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("Not Connected"));
