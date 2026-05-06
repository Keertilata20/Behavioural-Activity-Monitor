import streamlit as st
from analysis import run_analysis
import matplotlib.pyplot as plt
from collections import defaultdict
from datetime import timedelta
import matplotlib.dates as mdates

# ✅ MUST BE FIRST
st.set_page_config(
    page_title="Behavior Monitor",
    layout="wide"
)

# ✅ Run analysis AFTER configuration
data = run_analysis()

# Header
st.markdown("""
# 🧠 Behavioural Activity Monitor  
<small style='color: #00F5D4;'>Observing patterns • Interpreting behavior • Learning continuously</small>
""", unsafe_allow_html=True)

# -------------------
# SYSTEM STATUS
# -------------------


st.markdown("""
<style>
.card {
    background: #111827;
    padding: 20px;
    border-radius: 18px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    margin-bottom: 20px;
            color: white;
             background: linear-gradient(135deg, #111827, #1f2937);
    border: 1px solid rgba(255,255,255,0.05);
}
.metric-card {
    background: #1f2937;
    padding: 15px;
    border-radius: 14px;
    text-align: center;
            color: white;
            transition: all 0.2s ease;
}
.metric-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.4);
}
</style>
""", unsafe_allow_html=True)

st.markdown('<div class="card">', unsafe_allow_html=True)

st.subheader("🟢 System Status")

col1, col2, col3 = st.columns(3)

with col1:
    st.markdown(f"""
    <div class="metric-card">
        <h4>🕒 Most Active</h4>
        <h2>{data['most_active_time']}</h2>
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.markdown(f"""
    <div class="metric-card">
        <h4>📊 Consistency</h4>
        <h2>{data['consistency']}%</h2>
    </div>
    """, unsafe_allow_html=True)

with col3:
    st.markdown(f"""
    <div class="metric-card">
        <h4>🔥 Streak</h4>
        <h2>{data['streak']} days</h2>
    </div>
    """, unsafe_allow_html=True)

st.markdown('</div>', unsafe_allow_html=True)

# -------------------
# INSIGHT
# -------------------
st.divider()

st.markdown('<div class="card">', unsafe_allow_html=True)

st.subheader("🧠 Insight")

st.markdown(f"""
<div style='
    background: linear-gradient(135deg, #1f2937, #111827);
    padding: 20px;
    border-radius: 12px;
    font-size: 16px;
            color: white;
'>
            
 {
    if data["consistency"] < 50:
        suggestion = "📌 Try committing daily to build consistency."
  elif data["streak"] > 10:
    suggestion = "🔥 Keep the streak going! You're in peak flow."
  else:
    suggestion = "⚡ Increase frequency to stabilize your pattern."
     
 }
</div>
""", unsafe_allow_html=True)


st.markdown('</div>', unsafe_allow_html=True)


# -------------------
# ACTIVITY TREND
# -------------------



st.divider()
st.markdown('<div class="card">', unsafe_allow_html=True)
st.subheader("📈 Activity Trend")

cutoff = max(data["dates"]) - timedelta(days=90)
filtered_dates = [d for d in data["dates"] if d >= cutoff]

weekly_counts = defaultdict(int)

for d in filtered_dates:
    week_start = d - timedelta(days=d.weekday())
    weekly_counts[week_start] += 1

sorted_dates = sorted(weekly_counts.items())

x = [d[0] for d in sorted_dates]
y = [d[1] for d in sorted_dates]

fig, ax = plt.subplots(figsize=(8, 4))
ax.plot(x, y)
ax.fill_between(x, y, alpha=0.2)

ax.xaxis.set_major_locator(mdates.WeekdayLocator(interval=2))
ax.xaxis.set_major_formatter(mdates.DateFormatter('%b %d'))
plt.xticks(rotation=30)

ax.set_title("Commit Activity (Last 90 Days)")
ax.set_xlabel("Date")
ax.set_ylabel("Commits")

st.pyplot(fig)
st.markdown('</div>', unsafe_allow_html=True)


# -------------
# STREAK TIMELINES
# -------------

st.markdown("### 🔥 Streak Timeline")

for d in sorted(set(data["dates"]))[-14:]:
    st.write(f"🟩 {d}")

# -------------
# PERSONA
# -------------

if data["most_active_time"] == "Night":
    persona = "🌙 Night Owl Developer"
elif data["consistency"] > 70:
    persona = "📅 Consistent Builder"
elif data["streak"] > 10:
    persona = "🔥 Streak Machine"
else:
    persona = "⚡ Burst Coder"

st.markdown(f"""
<div class="metric-card">
<h3>🧠 Developer Persona</h3>
<h2>{persona}</h2>
</div>
""", unsafe_allow_html=True)


# -------------------
# ALERTS
# -------------------
st.divider()
st.markdown('<div class="card">', unsafe_allow_html=True)
col1, col2 = st.columns([2,1])

with col1:
    range_option = st.selectbox(
        "📅 Time Range",
        ["30 Days", "90 Days", "All Time"]
    )

with col2:
    show_anomalies = st.toggle("⚠️ Show Alerts", True)
if show_anomalies:
    for a in data["anomalies"]:
        if "drop" in a:
            st.warning(a)
        else:
            st.success(a)

st.markdown('</div>', unsafe_allow_html=True)