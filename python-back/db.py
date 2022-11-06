from flask import Flask
from flask import jsonify
from flask import request
from werkzeug.security import check_password_hash, generate_password_hash

from flask_jwt_extended import create_access_token
from flask_jwt_extended import current_user
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import JWTManager

from flask_cors import CORS

import time, os

app = Flask(__name__)
jwt = JWTManager(app)
cors = CORS()

app.config["JWT_SECRET_KEY"] = os.environ["SECRET_KEY"]

users = [
            {
                'id': 0,
                'username': 'h-dawg',
                'description': '--',
                'password': 'pbkdf2:sha256:260000$4ydhhUqIEZMXaRvA$4ac8e3812ffd97fdfd11b20579a977c1b6c9e5bc33c6d19431906fa0a78344db'
            },
            {
                'id': 1,
                'username': 'anonymous ant',
                'description': 'is struggling with addiction',
                'password': 'pbkdf2:sha256:260000$4ydhhUqIEZMXaRvA$4ac8e3812ffd97fdfd11b20579a977c1b6c9e5bc33c6d19431906fa0a78344db'
            }

        ]

messages = [
                {
                    'id': 0,
                    'sender': 'h-dawg',
                    'receiver': 'anonymous ant',
                    'time': 12321321,
                    'body': "What's up?"
                },
                                {
                    'id': 1,
                    'sender': 'anonymous ant',
                    'receiver': 'h-dawg',
                    'time': 12321321,
                    'body': "Hi there! What's on your mind?"
                },
                {
                    'id': 2,
                    'sender': 'h-dawg',
                    'receiver': 'matti meikäläinen',
                    'time': 12321321,
                    'body': "I'm so glad we were matched to tackle our prob..."
                },
                                {
                    'id': 3,
                    'sender': 'curious koala bear',
                    'receiver': 'h-dawg',
                    'time': 12321321,
                    'body': "Haven't heard from you in a long time. I was cur..."
                },
           ]


@app.route("/register", methods=["POST"])
def register():
  data = request.json

  username = data["username"]
  password = data["password"]

  password_hash = generate_password_hash(password)

  users.append({'username': username, 'password': password_hash, 'id': len(users)})

  return ""

@jwt.user_identity_loader
def user_identity_lookup(user):
    return user["id"]

@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    user_it = (user for user in users if user["id"] == identity)

    try:
      user = next(user_it)
      return user
    except:
      return None

@app.route("/auth", methods=["POST"])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    user_it = (user for user in users if user["username"] == username)
    try:
      user = next(user_it)
    except:
      return ""

    password_hash = user["password"]

    if not check_password_hash(password_hash, password):
      return None

    # Notice that we are passing in the actual sqlalchemy user object here
    access_token = create_access_token(identity=user)
    return jsonify(access_token=access_token)

@app.route("/new_message", methods=["POST"])
def new_message():
  message = request.json
  message["time"] = time.time()
  messages.append(message)

  return ""

@app.route("/messages")
@jwt_required()
def get_messages():
  user_id = get_jwt_identity()
  username = [user for user in users if user["id"] == user_id][0]["username"]

  res = {}

  filtered_messages = [
                msg
                for msg in messages
                if username in [msg["sender"], msg["receiver"]]
             ]
  print(filtered_messages)

  for msg in filtered_messages:
    receiver, sender = msg["receiver"], msg["sender"]

    assert username in [receiver, sender]

    if username == receiver:
      other = sender
    else:
      other = receiver

    if other in res:
      res[other].append(msg)
    else:
      res[other] = [msg]

  return res

@app.route("/user_info/<username>")
@jwt_required()
def get_userinfo(username):
  return [user for user in users if user["username"] == username][0]["description"]

def identity(payload):
  return payload["identity"]

@app.route("/")
def index():
  return "Hello"

if __name__ == "__main__":
  cors.init_app(app)
  app.run(debug=True)
