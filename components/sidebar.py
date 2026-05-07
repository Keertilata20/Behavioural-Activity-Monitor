import streamlit as st



def render_sidebar():

    with st.sidebar:

        st.markdown("""
        <h1 style='
        color:white;
        letter-spacing:-1px;
        '>
        BAM
        </h1>

        <p style='
        color:#8b949e;
        margin-top:-10px;
        '>
        Behaviour Intelligence
        </p>
        """, unsafe_allow_html=True)


        st.divider()


        st.markdown("### Navigation")

        st.markdown("- Dashboard")
        st.markdown("- Timeline")
        st.markdown("- Heatmap")
        st.markdown("- Insights")
        st.markdown("- Diagnostics")