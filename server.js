const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const sensor = require("node-dht-sensor");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = 3000;

// Servir archivos estáticos (tu index.html debe estar en la carpeta 'public')
app.use(express.static("public"));

// Leer sensor y emitir datos cada 2 segundos
setInterval(() => {
  sensor.read(22, 4, (err, temperature, humidity) => {
    if (!err) {
      io.emit("datosSensor", {
        temperatura: temperature.toFixed(1),
        humedad: humidity.toFixed(1),
      });
    } else {
      console.error("Error al leer el sensor:", err);
    }
  });
}, 2000);

server.listen(port, () => {
  console.log(`Servidor con Socket.IO en http://localhost:${port}`);
});
