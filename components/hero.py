import streamlit as st

def render_hero(data):

    st.markdown(
f"""
<div class="glass-card">

<p style="
color:#38bdf8;
font-weight:600;
letter-spacing:1px;
">
Behaviour Intelligence System
</p>

<h1 style="
font-size:56px;
margin-top:-10px;
color:white;
">
🧠 BAM
</h1>

<h2 style="
margin-top:-20px;
font-size:34px;
color:white;
">
{data['persona']}
</h2>

<p style="
font-size:18px;
max-width:700px;
color:#94a3b8;
">
Your development behavior shows strong productivity rhythms,
focus consistency, and measurable coding momentum patterns.
</p>

</div>
""",
unsafe_allow_html=True
    )