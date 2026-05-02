from datetime import datetime
import requests
from datetime import timedelta

def get_repo_commits(username, repo):
    commit_times = []
    page = 1

    while True:
        url = f"https://api.github.com/repos/{username}/{repo}/commits?per_page=100&page={page}"
        
        headers = {
            "Accept": "application/vnd.github+json"
        }

        response = requests.get(url, headers=headers)
        data = response.json()

        # 🛑 FIX: check if data is valid
        if not isinstance(data, list):
            print(f"⚠️ Skipping {repo}: {data}")
            break

        if not data:
            break

        print(f"{repo} page {page}: {len(data)} commits")

        for commit in data:
            try:
                date = commit["commit"]["author"]["date"]
                commit_times.append(date)
            except KeyError:
                continue

        page += 1

    return commit_times


def get_all_commits(username, repos):
    all_commits = []
    for repo in repos:
        commits = get_repo_commits(username, repo)
        all_commits.extend(commits)
    return all_commits


repos = [
    "flowsense-app",
    "ai-phish-guard",
    "zero-trust-auth",
    "talkspace-ai",
    "GreenScan",
    "portfolio",
    "data-mining-lab",
    "Behavioural-Activity-Monitor",
    "Keertilata20",
    "AI-Risk-lab",
    "keerti-contact-card",
    "Travel-Website",
    "Team_Cygnus"
]

commit_times = get_all_commits("Keertilata20", repos)
print("Fetched commits:", len(commit_times))

if not commit_times:
    print("No commit data found.")
    exit()


# Step 1: Raw commit data (fake for now)


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

for d, count in daily_counts.items():
    # get one representative hour for that day
    day_hours = [dt.hour for dt in parsed_dates if dt.date() == d]
    avg_hour = sum(day_hours) / len(day_hours)

    if 6 <= avg_hour < 12:
        time_buckets["Morning"] += count
    elif 12 <= avg_hour < 18:
        time_buckets["Afternoon"] += count
    elif 18 <= avg_hour < 21:
        time_buckets["Evening"] += count
    else:
        time_buckets["Night"] += count

# Find most active time
most_active_time = max(time_buckets, key=time_buckets.get)

# Step 6: Consistency Score
recent_days = 30
cutoff = max(dates) - timedelta(days=recent_days)

recent_dates = [d for d in dates if d >= cutoff]

total_days = recent_days
active_days = len(set(recent_dates))
consistency_score = round((active_days / total_days) * 100)


avg_per_day = sum(daily_counts.values()) / len(daily_counts)

if avg_per_day > 3:
    intensity = "high"
elif avg_per_day > 1:
    intensity = "moderate"
else:
    intensity = "low"


# Step 7: Final Insight
if consistency_score < 40 and intensity == "high":
    pattern = "bursty work pattern"
elif consistency_score > 70:
    pattern = "consistent work pattern"
else:
    pattern = "moderate work pattern"

insight = (
    f"You show a {pattern}, with {intensity} activity levels, "
    f"mostly during {most_active_time.lower()} hours."
)
print("\n--- Behavior Summary ---")


# Output
print("Most active time:", most_active_time)
print("Consistency Score:", f"{consistency_score}%")
print("\nInsight:")
print(insight)


# Step 8: Streak Detection

sorted_dates = sorted(set(recent_dates))

current_streak = 1
max_streak = 1

for i in range(1, len(sorted_dates)):
    if (sorted_dates[i] - sorted_dates[i - 1]).days == 1:
        current_streak += 1
        max_streak = max(max_streak, current_streak)
    else:
        current_streak = 1

# Step 9: Anomaly Detection




anomalies = []

for day, count in daily_counts.items():
   if count > avg_per_day * 2:
    anomalies.append(f"📈 Major spike in activity on {day}")
   elif count < avg_per_day * 0.3:
    anomalies.append(f"⚠️ Significant drop in activity on {day}")
# Step 10: Print Results

anomalies = anomalies[:5]
print("\nStreak Analysis:")
print("Longest Streak:", max_streak, "days")

print("\n⚠️ Behavior Alerts:\n\n")
if anomalies:
    for a in anomalies:
        print(a)
else:
    print("No significant anomalies detected.")