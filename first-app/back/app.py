import os
from flask import Flask,request,jsonify
from models import db, User
from flask_cors import CORS
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_jwt_extended import (JWTManager,create_access_token,get_jwt_identity, jwt_required)

BASEDIR= os.path.abspath(os.path.dirname(__file__))

app= Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']="sqlite:///" +os.path.join(BASEDIR,"blog.db")
app.config['JWT_SECRET_KEY']= 'secret-code-01'
db.init_app(app)
migrate=Migrate(app,db)
CORS(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)


@app.route('/')
def home():
    return 'hello'
@app.route("/login")


if __name__  == '__main__':

    app.run(host='localhost',port=5000)
    app.run(host='localhost',port=5000,debug=True)