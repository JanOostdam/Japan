from flask import Flask, send_from_directory
import socket

app = Flask(__name__)

@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_file(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    # Get local IP address
    hostname = socket.gethostname()
    local_ip = socket.gethostbyname(hostname)
    
    print(f"\nServer draait op: http://{local_ip}:5000")
    print("De leerlingen kunnen dit adres gebruiken om het spel te spelen!")
    print("\nDruk Ctrl+C om de server te stoppen.\n")
    
    app.run(host='0.0.0.0', port=5000, debug=False) 