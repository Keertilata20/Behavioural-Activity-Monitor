from flask import Flask, jsonify
import requests
from analysis import analyze_events, generate_timeline
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/github/<username>")
def github_data(username):

    print("USERNAME:", username)

    url = f"https://api.github.com/users/{username}/events"

    headers = {
    "Accept": "application/vnd.github+json",
    "User-Agent": "BAM-App"
}
    response = requests.get(url, headers=headers)
    
    print("STATUS:", response.status_code)

    if response.status_code != 200:
        return jsonify({"error": "User not found"})

    events = response.json()
    
    analysis = analyze_events(events)
    
    timeline = generate_timeline(events)
    
    analysis["timeline"] = timeline
    
    return jsonify(analysis)

if __name__ == "__main__":
    app.run(debug=True)