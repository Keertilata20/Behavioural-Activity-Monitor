import streamlit as st

from analysis import run_analysis

from components.sidebar import render_sidebar
from components.hero import render_hero
from components.ai_insights import render_ai_insight
from components.activity_chart import render_activity_chart
from components.heatmap import render_heatmap
from components.analytics_cards import render_analytics_cards
from components.diagnostics import render_diagnostics


st.set_page_config(
    page_title="BAM",
    layout="wide",
    initial_sidebar_state="collapsed"
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
render_sidebar()


# HERO
render_hero(data)


# METRICS
render_analytics_cards(data)


# MAIN GRID
left, right = st.columns([2.2, 1])


with left:

    render_activity_chart(data)

    st.markdown("<div style='height:20px'></div>", unsafe_allow_html=True)

    render_heatmap(data)


with right:

    render_ai_insight(data)

    st.markdown("<div style='height:20px'></div>", unsafe_allow_html=True)

    render_diagnostics(data)