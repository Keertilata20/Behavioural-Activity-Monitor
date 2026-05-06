import streamlit as st

def render_analytics_cards(data):

    st.metric(
        "🔥 Streak",
        f"{data['streak']} days"
    )

    st.metric(
        "📊 Consistency",
        f"{data['consistency']}%"
    )

    st.metric(
        "🕒 Peak Time",
        data["most_active_time"]
    )