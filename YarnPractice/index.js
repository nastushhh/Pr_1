const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Сервер работает! 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
