import streamlit as st



def render_hero(data):

    st.markdown(f"""
    <div class="card">

        <p style="
        color:#58a6ff;
        font-size:14px;
        font-weight:600;
        letter-spacing:1px;
        margin-bottom:10px;
        ">
        BEHAVIOUR INTELLIGENCE SYSTEM
        </p>

        <h1 class="hero-title">
        BAM
        </h1>

        <p class="hero-subtitle">
         {data['persona']}
        </p>

        <p class="hero-text">
        Analyze coding behavior, activity patterns,
        consistency trends, and development momentum
        through GitHub contribution intelligence.
        </p>

    </div>
    """, unsafe_allow_html=True)