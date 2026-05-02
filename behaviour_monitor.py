from datetime import datetime

# Step 1: Raw commit data (fake for now)
commit_times = [
    "2026-01-01T22:10",
    "2026-01-01T23:45",
    "2026-01-02T10:20",
    "2026-01-03T21:15",
    "2026-01-04T22:30",
    "2026-01-06T09:10"
]

# Step 2: Convert strings to datetime objects
parsed_dates = [datetime.fromisoformat(t) for t in commit_times]

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
insight = f"You tend to work mostly during {most_active_time.lower()} hours with a consistency of {consistency_score}%."

# Output
print("Most active time:", most_active_time)
print("Consistency Score:", f"{consistency_score}%")
print("\nInsight:")
print(insight)