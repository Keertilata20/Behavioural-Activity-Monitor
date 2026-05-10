import streamlit as st

from analysis import run_analysis
from components.sidebar import render_sidebar
from components.activity_chart import render_activity_chart

st.set_page_config(
    page_title="BAM",
    layout="wide",
    initial_sidebar_state="collapsed"
)

def load_css():
    with open("styles/main.css") as f:
        st.markdown(
            f"<style>{f.read()}</style>",
            unsafe_allow_html=True
        )



data = run_analysis()
load_css()

render_sidebar()

# HERO
st.title("BAM")
st.caption("Behaviour Intelligence System")

st.markdown("### ⚡ Burst Coder")

st.write("""
Analyze coding behavior, activity patterns,
consistency trends, and development momentum
through GitHub contribution intelligence.
""")

# METRICS
c1, c2, c3 = st.columns(3)

with c1:
    st.metric("Highest Streak", data["streak"])

with c2:
    st.metric("Consistency", f"{data['consistency']}%")

with c3:
    st.metric("Peak Time", data["most_active_time"])

st.divider()

# MAIN CONTENT
left, right = st.columns([2,1])

with left:
    render_activity_chart(data)

with right:

    st.subheader("🧠 AI Insight")

    st.info("""
    Strong afternoon productivity patterns detected.
    High-intensity burst coding behavior observed.
    """)

    st.subheader("🚨 Diagnostics")

    for a in data["anomalies"]:

        if "drop" in a:
            st.error(a)

        else:
            st.success(a)