import streamlit as st

def render_analytics_cards(data):

    cards = [
        ("🔥", "Streak", f"{data['streak']} Days"),
        ("📊", "Consistency", f"{data['consistency']}%"),
        ("🕒", "Peak Time", data["most_active_time"])
    ]

    for icon, title, value in cards:

        st.markdown(f'''
        <div class="metric-card">

            <div class="metric-icon">{icon}</div>

            <div class="metric-content">

                <p class="metric-title">{title}</p>

                <h2 class="metric-value">{value}</h2>

            </div>

        </div>
        ''', unsafe_allow_html=True)