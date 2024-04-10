# Demo Flask app that render the "templates/home.j2" template on "/".

from flask import Flask, render_template, request, jsonify

from flask_vite import Vite
from flask_socketio import SocketIO, emit
import random
import time

app = Flask(__name__)
#vite = Vite(app)

app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")



@app.route("/")
def home():
    for key, value in app.config.items():
        print(f"{key}: {value}")
    print(app.url_map)
    return render_template("home.j2")

@app.route("/welcome")
def welcome():
    return render_template("welcome.html")

@app.route('/runTemplate', methods=['POST'])
def run_template():
    data = request.json  # Get JSON data from the client
    param1 = data.get('param1', '')
    
    # Emit param1 with a random number appended 100 times
    for i in range(100):
        random_number = random.randint(1, 1000)  # Generate a random number
        message = f"{param1} {random_number}"
        time.sleep(1)
        socketio.emit('data', message)
    
    return jsonify({"status": "Data processing started"}), 200



if __name__ == '__main__':
    socketio.run(app, debug=True, port=5555)