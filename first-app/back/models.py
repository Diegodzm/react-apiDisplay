from flask_sqlalchemy import SQLAlchemy;

db= SQLAlchemy()

class User(db.Model):
    __tablename__= 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    firstname= db.Column(db.String(80), unique=False, nullable=False)
    lastname= db.Column(db.String(80), unique=False, nullable=False)
    username= db.Column(db.String(80), unique=False, nullable=False)
    address= db.Column(db.String(80), unique=False, nullable=False)
    user_calification = db.Column(db.Integer, unique=False, nullable=False)
    
    def __repr__(self):
        return f'<User {self.email}>'
    
    def serialize(self):

        return {
            "id": self.id,
            "email": self.email,
           
        }