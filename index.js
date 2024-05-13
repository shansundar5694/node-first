import express from "express";
import fs, { fsync } from "fs";
import { format } from "date-fns";
import { log } from "console";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "are you how" });
});
app.get("/get", (req, res) => {
  res.status(200).json({ message: "are you", data: { name: "sundar" } });
});

app.get("/write-read", (req, res) => {
  let today = format(new Date(), "dd - mm - yyyy - hh - mm - ss");
  console.log("today", today);
  const filePath = `TimeStamp/${today}.txt`;
  fs.writeFileSync(filePath, `${today}`, "utf-8");
  let data = fs.readFileSync(filePath, "utf-8");
  res.status(200).send(data);
});

app.listen(PORT, () => {
  console.log(`App is running in the = : ${PORT}`);
}); // running
