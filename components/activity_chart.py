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
        mode='lines+markers',
        line=dict(
    color="#6366f1",
    width=4
),

marker=dict(
    size=8
),

fillcolor="rgba(99,102,241,0.25)"
    ))

    fig.update_layout(
    font=dict(
    family="Inter",
    color="#cbd5e1"),
    xaxis=dict(
    showgrid=False,
    zeroline=False
    ),
    yaxis=dict(
    gridcolor="rgba(255,255,255,0.08)"
    ),
    hoverlabel=dict(
    bgcolor="#0f172a"
    ),
    template="plotly_dark",
    paper_bgcolor="#0f172a",
    plot_bgcolor="#0f172a",
    height=420,
    margin=dict(l=10,r=10,t=20,b=10)
)
    st.markdown("""
<div class="glass-card">
<h2 class="section-title">
📈 Activity Timeline
</h2>
<p class="muted">
Developer productivity patterns over the last 90 days
</p>
</div>
""", unsafe_allow_html=True)

    st.markdown('<div class="glass-card">', unsafe_allow_html=True)
    st.plotly_chart(
    fig,
    use_container_width=True,
    config={
        "displayModeBar": False
    }
)
    st.markdown('</div>', unsafe_allow_html=True)
    