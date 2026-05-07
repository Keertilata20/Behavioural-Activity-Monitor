import streamlit as st

def render_heatmap(data):

    st.markdown("""
    <div class="glass-card">
   <h2 class="section-title">🔥 Contribution Heatmap</h2>
    """, unsafe_allow_html=True)

    days = sorted(set(data["dates"]))[-35:]

    cols = st.columns(7)

    for i, d in enumerate(days):

        intensity = (i % 4) + 1

        colors = {
            1:"#163d2b",
            2:"#1f6f46",
            3:"#26a641",
            4:"#39d353"
        }

        with cols[i % 7]:

            st.markdown(f"""
<div class="heatmap-cell"
style="
    background:{colors[intensity]};
">
</div>

<p style='
text-align:center;
font-size:11px;
color:gray;
'>
{d.strftime("%d")}
</p>
""", unsafe_allow_html=True)

    st.markdown("</div>", unsafe_allow_html=True)