import os, json
from flask import Flask, jsonify, request, abort
from flask_cors import CORS
from pymongo import MongoClient, ASCENDING
from bson import ObjectId
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app)


client = MongoClient(os.getenv("MONGODB_URI"))
db = client[os.getenv("DB_NAME")]
courses = db.courses

def serialize(doc):
    if not doc: return None
    doc["_id"] = str(doc["_id"])
    return doc

@app.get("/api/courses/<slug>")
def get_course_by_id(slug):
    db = client['BizLearn']
    collection = db['courses']
    
    doc = collection.find_one({"slug": slug})
    if not doc:
        return {"error": "Not found"}, 404
    doc["_id"] = str(doc["_id"])
    return doc 

@app.get("/api/courses/<slug>/lessons/<id>")
def get_lesson_by_id(slug, id):
    db = client["BizLearn"]
    collection = db["courses"]

    course = collection.find_one({"slug": slug}, {"_id": 0, "title": 1, "lessons": 1})
    if not course:
        abort(404, "course not found")

    lesson = None

    for l in course["lessons"]:
        if str(l.get("id")) == id or l.get("slug") == id:
            lesson = l
            break

    if lesson is None:
        abort(404, "lesson not found")
    
    return jsonify(lesson)

# def delete_course_by_id(course_id):
#     db = client['BizLearn']
#     collection = db['courses']

#     query = {"_id": course_id}
    
#     result = collection.delete_one(query)
#     return result.deleted_count

@app.get("/api/users/<email>")
def get_user_by_email(email):
    db = client['BizLearn']
    collection = db['users']

    doc = collection.find_one({"email": email})
    if not doc:
        return {"error": "Not found"}, 404
    doc["_id"] = str(doc["_id"])
    return doc

@app.post("/api/users/")
def add_user(user_data):
    db = client['BizLearn']
    collection = db['users']
    
    if 'email' not in user_data:
        raise ValueError("user data not in correct form.")
    
    collection.insert_one(user_data)
    
    return user_data['id']


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

course_data = {
    "email": "zero-to-fullstack-bootcamp"
}