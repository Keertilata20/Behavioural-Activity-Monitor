def run_analysis():
    from datetime import datetime, timedelta
    import requests
    import os
    from dotenv import load_dotenv

    load_dotenv()

    # -----------------------
    # 1. Setup
    # -----------------------
    username = "Keertilata20"

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

    headers = {
        "Accept": "application/vnd.github+json",
        "Authorization": f"token {os.getenv('GITHUB_TOKEN')}"
    }

    # -----------------------
    # 2. Fetch commits
    # -----------------------
    def get_repo_commits(repo):
        commit_times = []
        page = 1

        while True:
            url = f"https://api.github.com/repos/{username}/{repo}/commits?per_page=100&page={page}"
            response = requests.get(url, headers=headers)
            data = response.json()

            if not isinstance(data, list):
                break

            if not data:
                break

            for commit in data:
                try:
                    date = commit["commit"]["author"]["date"]
                    commit_times.append(date)
                except KeyError:
                    continue

            page += 1

        return commit_times

    # -----------------------
    # 3. Aggregate commits
    # -----------------------
    commit_times = []
    for repo in repos:
        commit_times.extend(get_repo_commits(repo))

    if not commit_times:
        return {
            "most_active_time": "N/A",
            "consistency": 0,
            "insight": "No data available",
            "streak": 0,
            "anomalies": [],
            "total_commits": 0
        }

    # -----------------------
    # 4. Process data
    # -----------------------
    parsed_dates = [datetime.fromisoformat(t.replace("Z", "")) for t in commit_times]
    dates = [dt.date() for dt in parsed_dates]

    # daily counts
    daily_counts = {}
    for d in dates:
        daily_counts[d] = daily_counts.get(d, 0) + 1

    # -----------------------
    # 5. Time buckets
    # -----------------------
    time_buckets = {"Morning": 0, "Afternoon": 0, "Evening": 0, "Night": 0}

    for d, count in daily_counts.items():
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

    most_active_time = max(time_buckets, key=time_buckets.get)

    # -----------------------
    # 6. Consistency
    # -----------------------
    recent_days = 30
    cutoff = max(dates) - timedelta(days=recent_days)
    recent_dates = [d for d in dates if d >= cutoff]

    consistency = round((len(set(recent_dates)) / recent_days) * 100)

    # -----------------------
    # 7. Intensity
    # -----------------------
    avg_per_day = sum(daily_counts.values()) / len(daily_counts)

    if avg_per_day > 3:
        intensity = "high"
    elif avg_per_day > 1:
        intensity = "moderate"
    else:
        intensity = "low"

    # -----------------------
    # 8. Pattern
    # -----------------------
    if consistency < 40 and intensity == "high":
        pattern = "bursty work pattern"
    elif consistency > 70:
        pattern = "consistent work pattern"
    else:
        pattern = "moderate work pattern"

    insight = f"You show a {pattern}, with {intensity} activity levels, mostly during {most_active_time.lower()} hours."

    # -----------------------
    # 9. Streak
    # -----------------------
    sorted_dates = sorted(set(dates))

    current_streak = 1
    max_streak = 1
    prev = None

    for d in sorted_dates:
        if prev is None:
            current_streak = 1
        elif (d - prev).days == 1:
            current_streak += 1
        else:
            current_streak = 1

        max_streak = max(max_streak, current_streak)
        prev = d

    # -----------------------
    # 10. Anomalies
    # -----------------------
    anomalies = []

    for day, count in daily_counts.items():
        if count > avg_per_day * 2:
            anomalies.append(f"📈 Major spike in activity on {day}")
        elif count < avg_per_day * 0.3:
            anomalies.append(f"⚠️ Significant drop in activity on {day}")

    anomalies = anomalies[:5]

    # -----------------------
    # FINAL OUTPUT
    # -----------------------
    return {
        "dates": dates,
        "most_active_time": most_active_time,
        "consistency": consistency,
        "insight": insight,
        "streak": max_streak,
        "anomalies": anomalies,
        "total_commits": len(commit_times)
    }
    