import streamlit as st

def render_diagnostics(data):

    st.markdown("""
    <div class="glass-card">
    <h2 class="section-title">🚨 Behavioral Diagnostics</h2>
    """, unsafe_allow_html=True)

    for a in data["anomalies"]:

        if "drop" in a:

            st.error(f"⚠️ {a}")

        else:

            st.success(f"📈 {a}")

    st.markdown("</div>", unsafe_allow_html=True)