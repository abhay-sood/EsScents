from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

# Define the file where queries will be stored
QUERIES_FILE = "test.json"

# Ensure the file exists and initialize if it doesn't
if not os.path.exists(QUERIES_FILE):
    with open(QUERIES_FILE, "w") as file:
        json.dump({"queries": []}, file)


@app.route('/search', methods=['POST'])
def search():
    data = request.get_json()  # Parse incoming JSON
    query = data.get('query')  # Extract the query from JSON

    # Print the query to the console
    print(f"Received query: {query}")

    # Append the query to the JSON file
    with open(QUERIES_FILE, "r+") as file:
        queries_data = json.load(file)  # Load existing data
        queries_data["queries"].append(query)  # Add new query
        file.seek(0)  # Reset file pointer to the beginning
        json.dump(queries_data, file, indent=4)  # Write updated data

    # Respond back with a confirmation message
    return jsonify({"message": "Query received", "query": query})


if __name__ == '__main__':
    app.run(debug=True)