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

        mode='lines',

        line=dict(
            color="#2f81f7",
            width=3
        ),

        fill='tozeroy',

        fillcolor="rgba(47,129,247,0.12)"
    ))


    fig.update_layout(

        height=320,

        paper_bgcolor="#161b22",
        plot_bgcolor="#161b22",

        margin=dict(l=10,r=10,t=10,b=10),

        font=dict(
            family="Inter",
            color="#8b949e"
        ),

        xaxis=dict(
            showgrid=False,
            zeroline=False
        ),

        yaxis=dict(
            gridcolor="rgba(255,255,255,0.05)",
            zeroline=False
        )
    )


    with st.container():

        st.markdown("""
        <div class="card">

            <div class="section-title">
            Activity Timeline
            </div>

            <div class="section-subtitle">
            Last 90 days
            </div>

        </div>
        """, unsafe_allow_html=True)

        st.plotly_chart(
            fig,
            use_container_width=True,
            config={
                "displayModeBar": False
            }
        )