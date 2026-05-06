import streamlit as st
def render_sidebar(data):
    with st.sidebar:
         st.markdown("# 🧠 BAM")

         st.markdown("### Behaviour Analytics")
         
         st.divider()
         
         st.markdown("### 👤 Profile")
         
         st.markdown("""
    **Persona:** 🔥 Streak Machine  
    **Focus:** Afternoon Coding  
    **Consistency:** 53%
    """)
         st.divider()
         
         st.markdown("### 🚀 Quick Stats")
         
         st.progress(data["consistency"] / 100)
         
         st.caption("Consistency Score")
         
         st.metric("🔥 Current Streak", f"{data['streak']}")
         
         st.metric("📈 Total Commits", data["total_commits"])

   