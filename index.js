import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "are you how" });
});
app.get("/get", (req, res) => {
  res.status(200).json({ message: "are you", data: { name: "sundar" } });
});

app.listen(PORT, () => {
  console.log(`App is running in the = : ${PORT}`);
}); // running
