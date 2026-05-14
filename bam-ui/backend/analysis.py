from collections import Counter
from datetime import datetime
from collections import defaultdict


def analyze_events(events):

    hours = []
    dates = []

    for event in events:

        created_at = event.get("created_at")

        if created_at:

            dt = datetime.strptime(created_at, "%Y-%m-%dT%H:%M:%SZ")

            hours.append(dt.hour)

            dates.append(dt.date())

    if not hours:
        return {}

    # -------------------------
    # PEAK TIME
    # -------------------------

    most_common_hour = Counter(hours).most_common(1)[0][0]

    if most_common_hour < 12:
        peak = "Morning"

    elif most_common_hour < 18:
        peak = "Afternoon"

    else:
        peak = "Night"

    # -------------------------
    # CONSISTENCY
    # -------------------------

    unique_days = len(set(dates))

    consistency = round((unique_days / 90) * 100)

    # -------------------------
    # LONGEST STREAK
    # -------------------------

    sorted_dates = sorted(set(dates))

    longest_streak = 1
    current_streak = 1

    for i in range(1, len(sorted_dates)):

        difference = (sorted_dates[i] - sorted_dates[i - 1]).days

        if difference == 1:

            current_streak += 1

            longest_streak = max(longest_streak, current_streak)

        else:

            current_streak = 1



        # -------------------------
    # TIMELINE DATA
    # -------------------------

    timeline_counter = defaultdict(int)

    for date in dates:
        timeline_counter[str(date)] += 1

    timeline = []

    for date, count in sorted(timeline_counter.items()):

        timeline.append({
            "date": date,
            "count": count
        })

    # -------------------------
    # RETURN
    # -------------------------

    return {

    "highest_streak": longest_streak,

    "consistency": consistency,

    "peak_time": peak

}


def generate_timeline(events):

    daily_counts = defaultdict(int)

    for event in events:

        created_at = event.get("created_at")

        if created_at:

            day = created_at[:10]
            daily_counts[day] += 1

    timeline = []

    for day, count in sorted(daily_counts.items()):

        timeline.append({
            "date": day,
            "commits": count
        })

    return timeline