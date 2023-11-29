from flask import Flask # Flask
from flask_cors import CORS, cross_origin
from flask import request
from flask.helpers import send_from_directory
import time

app = Flask(__name__, static_folder = "machine-unlearning2/build", static_url_path="")
CORS(app)

@app.route('/users')
def users():
    return { "id" : 1, "name" : "yerin" }

@app.route("/fileName", methods=["POST"])
@cross_origin()
def fileName():
    count = request.json['fileName']
    return { 'fileName': count }


@app.route("/ModelCheck", methods=["GET"])
@cross_origin()
def ModelCheck():
    #to be filled by Ainesh's code
    time.sleep(5)
    return {'result': 'temp result'}


@app.route("/Unlearning", methods=["GET"])
@cross_origin()
def Unlearning():
    #to be filled by Ainesh's code
    time.sleep(2)
    return {'result': 'temp result unlearns'}

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run(debug = True)