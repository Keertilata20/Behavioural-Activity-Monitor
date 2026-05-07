import streamlit as st



def render_heatmap(data):

    st.markdown("""
    <div class="card">

    <div class="section-title">
    Contribution Heatmap
    </div>

    <div class="section-subtitle">
    Contribution density
    </div>

    <div class="heatmap-grid">
    """, unsafe_allow_html=True)


    colors = {
        1: "#0e4429",
        2: "#006d32",
        3: "#26a641",
        4: "#39d353"
    }


    days = sorted(set(data["dates"]))[-35:]


    for i, d in enumerate(days):

        intensity = (i % 4) + 1

        st.markdown(f"""
        <div
        class="heat-cell"
        style="background:{colors[intensity]}"
        ></div>
        """, unsafe_allow_html=True)


    st.markdown("""
    </div>
    </div>
    """, unsafe_allow_html=True)