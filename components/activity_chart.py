import streamlit as st
import plotly.graph_objects as go

from collections import defaultdict
from datetime import timedelta


def render_activity_chart(data):

    cutoff = max(data["dates"]) - timedelta(days=90)

    filtered_dates = [
        d for d in data["dates"]
        if d >= cutoff
    ]

    weekly_counts = defaultdict(int)

    for d in filtered_dates:
        week_start = d - timedelta(days=d.weekday())
        weekly_counts[week_start] += 1

    sorted_dates = sorted(weekly_counts.items())

    x = [d[0] for d in sorted_dates]
    y = [d[1] for d in sorted_dates]

    fig = go.Figure()

    fig.add_trace(go.Scatter(
        x=x,
        y=y,
        fill='tozeroy',
        mode='lines+markers'
    ))

    fig.update_layout(
         template="plotly_dark",
    paper_bgcolor="#0f172a",
    plot_bgcolor="#0f172a",
    height=420,
    margin=dict(l=10,r=10,t=20,b=10)
    )

    st.plotly_chart(
        fig,
        use_container_width=True
    )