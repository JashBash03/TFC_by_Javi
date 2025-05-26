const express = require("express");
const sensor = require("node-dht-sensor");

const app = express();
const port = 3000;

app.get("/sensor", (req, res) => {
  sensor.read(22, 4, (err, temperature, humidity) => {
    if (!err) {
      res.json({
        temperatura: temperature.toFixed(1),
        humedad: humidity.toFixed(1),
      });
    } else {
      res.status(500).json({ error: "Error al leer el sensor" });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});