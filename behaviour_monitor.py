from datetime import datetime
import requests

def get_github_commits(username):
    url = f"https://api.github.com/users/{username}/events"
    
    response = requests.get(url)
    data = response.json()

    commit_times = []

    for event in data:
       if event.get("type") == "PushEvent":
          payload = event.get("payload", {})
          commits = payload.get("commits", [])

          for commit in commits:
             commit_times.append(event.get("created_at"))

    return commit_times

# Step 1: Raw commit data (fake for now)
username = "Keertilata20"
commit_times = get_github_commits(username)

# Step 2: Convert strings to datetime objects
parsed_dates = [datetime.fromisoformat(t.replace("Z", "")) for t in commit_times]

# Step 3: Extract hours and dates
hours = [dt.hour for dt in parsed_dates]
dates = [dt.date() for dt in parsed_dates]

# Step 4: Count commits per day
daily_counts = {}
for d in dates:
    if d in daily_counts:
        daily_counts[d] += 1
    else:
        daily_counts[d] = 1

# Step 5: Time-of-day buckets
time_buckets = {
    "Morning": 0,
    "Afternoon": 0,
    "Evening": 0,
    "Night": 0
}

for h in hours:
    if 6 <= h < 12:
        time_buckets["Morning"] += 1
    elif 12 <= h < 18:
        time_buckets["Afternoon"] += 1
    elif 18 <= h < 21:
        time_buckets["Evening"] += 1
    else:
        time_buckets["Night"] += 1

# Find most active time
most_active_time = max(time_buckets, key=time_buckets.get)

# Step 6: Consistency Score
first_day = min(dates)
last_day = max(dates)
total_days = (last_day - first_day).days + 1
active_days = len(set(dates))

consistency_score = round((active_days / total_days) * 100)

# Step 7: Final Insight
if consistency_score > 75:
    consistency_text = "high"
elif consistency_score > 50:
    consistency_text = "moderate"
else:
    consistency_text = "low"

insight = f"You show {consistency_text} consistency and tend to work mostly during {most_active_time.lower()} hours."
print("\n--- Behavior Summary ---")


# Output
print("Most active time:", most_active_time)
print("Consistency Score:", f"{consistency_score}%")
print("\nInsight:")
print(insight)


# Step 8: Streak Detection

sorted_dates = sorted(set(dates))

current_streak = 1
max_streak = 1

for i in range(1, len(sorted_dates)):
    if (sorted_dates[i] - sorted_dates[i - 1]).days == 1:
        current_streak += 1
        max_streak = max(max_streak, current_streak)
    else:
        current_streak = 1

# Step 9: Anomaly Detection

avg_commits = sum(daily_counts.values()) / len(daily_counts)

anomalies = []

for day, count in daily_counts.items():
    if count > avg_commits * 1.5:
        anomalies.append(f"📈 Spike detected on {day}")
    elif count < avg_commits * 0.5:
        anomalies.append(f"⚠️ Low activity on {day}")

# Step 10: Print Results

print("\nStreak Analysis:")
print("Longest Streak:", max_streak, "days")

print("\nAnomalies:")
if anomalies:
    for a in anomalies:
        print(a)
else:
    print("No significant anomalies detected.")