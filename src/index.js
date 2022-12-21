const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log("server already open"));
app.use(express.json());

// envia um objeto por meio do body
app.post("/teste", (req, res) => {
  const body = req.body;
  res.send(body);
  console.log(body);
});

// Pega por meio da query da requisição

app.get("/teste", (req, res) => {
  const query = req.query;
  res.send(query);
});

// Pega pelo Route params

app.put("/teste/:id", (req, res) => {
  const { id } = req.params;
  res.send(id);
});

//atualiza por meio do id
app.patch("/teste/:id", (req, res) => {
  res.send(["teste6", "teste1", "test5"]);
});

//deleta por meio do id
app.delete("/teste/:id", (req, res) => {
  res.send(["teste1", "teste2", "test3"]);
});
