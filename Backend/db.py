
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://daniel:xiYyuS8qdljf8uTE@bizlearn.vndw3p3.mongodb.net/?retryWrites=true&w=majority&appName=BizLearn"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


# testing code below

def add_course(course_data):
    db = client['BizLearn'] # database name
    collection = db['courses'] # collection name within the database
    
    if 'slug' not in course_data:
        raise ValueError("Patient data not in correct form.")
    
    result = collection.insert_one(course_data)
    
    return course_data['slug']

def get_course_by_id(slug):
    db = client['BizLearn']
    collection = db['courses']
    
    # _id is always the email string
    query = {"slug": slug}
    
    doc = collection.find_one(query)
    return doc

def delete_course_by_id(course_id):
    db = client['BizLearn']
    collection = db['courses']

    query = {"_id": course_id}
    
    result = collection.delete_one(query)
    return result.deleted_count


course_data = {
    "slug": "zero-to-fullstack-bootcamp",
    "image": "/placeholder.png",
    "title": "Zero to Fullstack Bootcamp",
    "description": "Introduction into programming and creating your first project",
    "lessons": [
        {
            "id": "1",
            "title": "Introduction to HTML",
            "description": "The basics behind every website",
            "type": "VideoLesson",
            "url": "https://www.youtube.com/embed/3OamzN90kPg?si=kyb2jPaEMNn5wTwd"
        },
        {
            "id": "3",
            "title": "HTML Challenge",
            "description": "Description",
            "type": "InteractiveLesson",
            "default_html": "<!-- HTML --> <h1>Challenge 1</h1> <p>Using what you learned, create a list of 5 of your favourite foods.</p>",
            "default_css": "/* CSS */ body { background: #172037; color: white; font-family: sans-serif; }",
            "default_js": "// JS console.log('Hello from JS!')"
        }
    ]
}


add_course(course_data)