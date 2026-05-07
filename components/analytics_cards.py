import streamlit as st



def render_analytics_cards(data):

    st.markdown(f"""

    <div class="metric-row">

        <div class="metric-box">
            <div class="metric-label">
            Highest Streak
            </div>

            <div class="metric-value">
            {data['streak']}
            </div>
        </div>


        <div class="metric-box">
            <div class="metric-label">
            Consistency
            </div>

            <div class="metric-value">
            {data['consistency']}%
            </div>
        </div>


        <div class="metric-box">
            <div class="metric-label">
            Peak Coding Time
            </div>

            <div class="metric-value">
            {data['most_active_time']}
            </div>
        </div>

    </div>

    """, unsafe_allow_html=True)