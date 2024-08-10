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
Migrate(app,db)
CORS(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)


@app.route('/')
def home():
    return 'hello'

@app.route('/user/register', methods=['POST'])
def user_register():
     email= request.json.get('email')
     if email is not None:
        user = User.query.filter_by(email=email).first()
        if user is not None:
            return jsonify({
                "msg":"Este usuario ya existe"
                }),400
        
        else:
            user=User()
            password= request.json.get('password')
            password_hash= bcrypt.generate_password_hash(password)

            user.password =password_hash
            user.email= email


            db.session.add(user)
            db.session.commit()

            return jsonify({
                "msg":"user created"
            }), 200

     else:
        return jsonify({
            "msg": "email is required"
        }),400