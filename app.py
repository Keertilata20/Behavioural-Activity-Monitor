import streamlit as st

from analysis import run_analysis

from components.sidebar import render_sidebar
from components.hero import render_hero
from components.analytics_cards import render_analytics_cards
from components.activity_chart import render_activity_chart
from components.heatmap import render_heatmap
from components.diagnostics import render_diagnostics


st.set_page_config(
    page_title="BAM",
    layout="wide"
)


def load_css():
    with open("styles/main.css") as f:
        st.markdown(
            f"""
<style>
{f.read()}
</style>
""",
            unsafe_allow_html=True
        )




data = run_analysis()
load_css()

# SIDEBAR
render_sidebar(data)

# HERO
render_hero(data)

st.markdown("<br>", unsafe_allow_html=True)

# CHART + ANALYTICS SIDE BY SIDE
left, right = st.columns([4, 1])

with left:
    render_activity_chart(data)

with right:
    render_analytics_cards(data)

st.markdown("<br>", unsafe_allow_html=True)

# HEATMAP
render_heatmap(data)

st.markdown("<br>", unsafe_allow_html=True)

# DIAGNOSTICS
render_diagnostics(data)