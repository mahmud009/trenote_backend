const express = require("express");
const app = express();
const PORT = process.env.PORT || 3120;

app.get("/ping", (req, res) => {
  res.status(200).send("Ping success");
});

app.get("/products", (req, res) => {
  const product = { name: "test product", id: 1 };
  res.status(200).send(product);
});

app.get("/users", (req, res) => {
  const product = { name: "Mahmud", id: 1 };
  res.status(200).send(product);
});

app.get("/tasks", (req, res) => {
  const product = { name: "test tasks", id: 1 };
  res.status(200).send(product);
});

app.get("/groups", (req, res) => {
  const product = { name: "test groups", id: 1 };
  res.status(200).send(product);
});

console.log("app is in staging");

app.listen(PORT, () => console.log(`App is running on ${PORT}`));
