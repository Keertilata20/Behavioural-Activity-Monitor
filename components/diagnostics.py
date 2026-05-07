import streamlit as st



def render_diagnostics(data):

    st.markdown("""
    <div class="card">

    <div class="section-title">
    Behavioural Diagnostics
    </div>

    <div class="section-subtitle">
    Pattern anomalies and activity signals
    </div>
    """, unsafe_allow_html=True)


    for a in data["anomalies"]:

        if "drop" in a:

            st.markdown(
                f'<div class="alert-bad"> {a}</div>',
                unsafe_allow_html=True
            )

        else:

            st.markdown(
                f'<div class="alert-good"> {a}</div>',
                unsafe_allow_html=True
            )


    st.markdown("</div>", unsafe_allow_html=True)