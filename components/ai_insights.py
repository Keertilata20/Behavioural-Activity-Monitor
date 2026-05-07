import streamlit as st



def render_ai_insight(data):

    st.markdown(f"""

    <div class="ai-panel">

        <div class="section-title">
        AI Behavioural Insight
        </div>

        <p style="
        color:#8b949e;
        line-height:1.8;
        font-size:15px;
        ">

        This developer demonstrates strong productivity bursts
        during afternoon coding sessions with moderate
        consistency retention and measurable coding momentum.

        </p>

    </div>

    """, unsafe_allow_html=True)