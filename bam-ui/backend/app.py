from flask import Flask, jsonify
import requests
from analysis import analyze_events, generate_timeline
from flask_cors import CORS
from analysis import analyze_contributions

from dotenv import load_dotenv
import os

load_dotenv()

TOKEN = os.getenv("GITHUB_TOKEN")

app = Flask(__name__)
CORS(app)

@app.route("/github/<username>")
def github_data(username):

    print("USERNAME:", username)

    url = "https://api.github.com/graphql"

    headers = {
        "Authorization": f"Bearer {TOKEN}"
    }

    query = """
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
    """

    variables = {
        "username": username
    }

    response = requests.post(

        url,

        json={
            "query": query,
            "variables": variables
        },

        headers=headers
    )

    print("STATUS:", response.status_code)

    if response.status_code != 200:

        return jsonify({
            "error": "GitHub user not found"
        }), 404

    data = response.json()
    
    days = []
    if data["data"]["user"] is None:

          return jsonify({
        "error": "GitHub user not found"
    }), 404

    weeks = data["data"]["user"]["contributionsCollection"]["contributionCalendar"]["weeks"]

    for week in weeks:

        for day in week["contributionDays"]:

           days.append({
            "date": day["date"],
            "count": day["contributionCount"]
        })
    analysis = analyze_contributions(days)

    print(data)

    analysis["timeline"] = days

    return jsonify(analysis)

if __name__ == "__main__":
    app.run(debug=True)