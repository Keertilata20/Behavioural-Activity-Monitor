from collections import Counter
from datetime import datetime
from collections import defaultdict
from datetime import timedelta


def analyze_events(events):

    hours = []
    dates = []
    diagnostics = []

    for event in events:

        created_at = event.get("created_at")
        event_type = event.get("type")

        if event_type != "PushEvent":
            continue

        if created_at:

            dt = datetime.strptime(created_at, "%Y-%m-%dT%H:%M:%SZ")

            hours.append(dt.hour)

            dates.append(dt.date())

    if not hours:

     return {
        "highest_streak": 0,
        "consistency": 0,
        "peak_time": "No Data",
        "insight": "No public activity found"
    }

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


    
    diagnostics.append(
    f"Peak productivity occurs during {peak.lower()} hours"
)

    # -------------------------
    # CONSISTENCY
    # -------------------------

    unique_days = len(set(dates))

    consistency = round((unique_days / 90) * 100)
    
    if consistency < 15:

     diagnostics.append(
        "Irregular contribution consistency detected"
    )

    else:

      diagnostics.append(
        "Stable development rhythm observed"
    )



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


    diagnostics.append(
    f"Current coding streak reached {longest_streak} active days"
)




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
    # INSIGHTS
    # -------------------------

    if peak == "Morning":
       insight = "Early-day development rhythm detected. Consistent morning coding behavior observed."

    elif peak == "Afternoon":

       insight = "Strong afternoon productivity patterns detected. High development momentum observed."

    else:

       insight = "Night-focused coding behavior detected. Late-hour productivity dominance observed."


    



    # -------------------------
    # RETURN
    # -------------------------

    return {

    "highest_streak": longest_streak,

    "consistency": consistency,

    "peak_time": peak,

    "insight": insight,

    "diagnostics": diagnostics
}


def generate_timeline(events):

    daily_counts = defaultdict(int)

    # -------------------------
    # COUNT PUSH EVENTS
    # -------------------------

    for event in events:

        event_type = event.get("type")

        if event_type != "PushEvent":
            continue

        created_at = event.get("created_at")

        if created_at:

            day = created_at[:10]

            daily_counts[day] += 1

    # -------------------------
    # CREATE FULL DATE RANGE
    # -------------------------

    today = datetime.utcnow().date()

    timeline = []

    for i in range(29, -1, -1):

        current_day = today - timedelta(days=i)

        current_day_str = str(current_day)

        timeline.append({

            "date": current_day_str,

            "commits": daily_counts[current_day_str]

        })

    return timeline





def analyze_contributions(days):

    counts = [day["count"] for day in days]

    # -------------------------
    # CONSISTENCY
    # -------------------------

    active_days = len([c for c in counts if c > 0])

    consistency = round((active_days / len(days)) * 100)

    # -------------------------
    # STREAK
    # -------------------------

    highest_streak = 0
    current_streak = 0

    for count in counts:

        if count > 0:

            current_streak += 1
            highest_streak = max(highest_streak, current_streak)

        else:

            current_streak = 0

    # -------------------------
    # PEAK TIME
    # -------------------------

    peak_time = "Night"

    # -------------------------
    # INSIGHT
    # -------------------------

    if consistency > 70:

        insight = "Highly disciplined development rhythm detected."

    elif consistency > 40:

        insight = "Moderately consistent coding behavior observed."

    else:

        insight = "Burst-oriented coding behavior detected."

    # -------------------------
    # DIAGNOSTICS
    # -------------------------

    diagnostics = [

        f"{active_days} active coding days detected",

        f"Highest streak reached {highest_streak} days",

        f"{consistency}% contribution consistency observed"

    ]

    return {

        "highest_streak": highest_streak,

        "consistency": consistency,

        "peak_time": peak_time,

        "insight": insight,

        "diagnostics": diagnostics
    }