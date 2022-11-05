from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

db_user = os.environ["DB_USER"]
db_pass = os.environ["DB_PASS"]
db_name = os.environ["DB_NAME"]
instance_connection_name = os.environ["INSTANCE_CONNECTION_NAME"]
DB_URI = f"postgresql://{db_user}:{db_pass}@/{db_name}?host=/cloudsql/{instance_connection_name}"

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = DB_URI

db = SQLAlchemy(app)

@app.route("/login")
def login():
  print(db.session.execute("SELECT * FROM users"))

  return "hi"