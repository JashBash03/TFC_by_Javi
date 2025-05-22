# server.py
import Adafruit_DHT
import time
from flask import Flask, render_template
from flask_socketio import SocketIO, emit

sensor = Adafruit_DHT.DHT11
pin = 4  # GPIO donde está conectado el DHT11

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

def read_sensor():
    while True:
        humedad, temperatura = Adafruit_DHT.read_retry(sensor, pin)
        if humedad is not None and temperatura is not None:
            data = {'temp': temperatura, 'hum': humedad}
            socketio.emit('sensor_data', data)
        time.sleep(2)  # cada 2 segundos

@socketio.on('connect')
def handle_connect():
    print('Cliente conectado')

if __name__ == '__main__':
    socketio.start_background_task(read_sensor)
    socketio.run(app, host='0.0.0.0', port=5000)
