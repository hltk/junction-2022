from flask import Flask
from flask import request
from flask_sqlalchemy import SQLAlchemy
import os
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt import JWT, jwt_required, current_identity
from flask_cors import CORS

db_user = os.environ["DB_USER"]
db_pass = os.environ["DB_PASS"]
db_name = os.environ["DB_NAME"]
instance_connection_name = os.environ["INSTANCE_CONNECTION_NAME"]
DB_URI = f"postgresql://{db_user}:{db_pass}@/{db_name}?host=/cloudsql/{instance_connection_name}"

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = DB_URI

db = SQLAlchemy(app)
CORS(app)

app.config['SECRET_KEY'] = os.environ["SECRET_KEY"]

@app.route("/register", methods=["POST"])
def register():
  data = request.json

  username = data["username"]
  password = data["password"]

  hash = generate_password_hash(password)

  try:
    db.session.execute("INSERT INTO users (username, password) VALUES (:u, :p)", {'u': username, 'p': hash})
    db.session.commit()
  except e:
    print("ERR", e)

  return ""

def authenticate(username, password):
  user = db.session.execute("SELECT id, username, password FROM users WHERE username = :username", {'username': username}).fetchone() 

  if not user:
    return ""

  password_hash = user[2]

  if not check_password_hash(password_hash, password):
    return None
  
  return user

@app.route("/messages")
@jwt_required()
def get_messages():
  user_id = current_identity
  username = db.session.execute("SELECT username FROM users WHERE id = :id", {"id": str(user_id)}).fetchone()[0]

  res = {}

  messages = db.session.execute("SELECT ts, sender, receiver, content FROM messages WHERE sender = :username OR receiver = :username", {'username': username}).fetchall()

  for msg in messages:
    a = msg[1]
    b = msg[2]

    other = b if a == username else a

    formatted = {'time': str(msg[0]), 'sender': msg[1], 'receiver': msg[2], 'content': msg[3]}

    if other in res:
      res[other].append(formatted)
    else:
      res[other] = [formatted]

  return res

def identity(payload):
  return payload["identity"]

@app.route("/")
def index():
  return "Hello"

jwt = JWT(app, authenticate, identity)