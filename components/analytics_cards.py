import streamlit as st
import streamlit.components.v1 as components

def render_analytics_cards(data):

    cards_html = ""

    cards = [
        ("🔥", "Highest Streak", f"{data['streak']} Days"),
        ("📊", "Consistency", f"{data['consistency']}%"),
        ("🕒", "Peak Time", data["most_active_time"])
    ]

    for icon, title, value in cards:

        cards_html += f"""
        <div class="metric-card">

            <div class="metric-icon">
                {icon}
            </div>

            <div class="metric-content">

                <p class="metric-title">
                    {title}
                </p>

                <h2 class="metric-value">
                    {value}
                </h2>

            </div>

        </div>
        """

    components.html(
        f"""
        <style>

        .metric-card {{

            display: flex;
            align-items: center;
            gap: 16px;

            padding: 20px;

            border-radius: 22px;

            margin-bottom: 18px;

            background:
            linear-gradient(
                145deg,
                rgba(15,23,42,0.95),
                rgba(30,41,59,0.82)
            );

            border:
            1px solid rgba(255,255,255,0.06);

            box-shadow:
            0 10px 30px rgba(0,0,0,0.25);

            color: white;
            transition:
transform 0.25s ease,
box-shadow 0.25s ease;
        }}
        .metric-card:hover {{

    transform: translateY(-4px);

    box-shadow:
    0 18px 40px rgba(0,0,0,0.35);
}}

        .metric-icon {{
            font-size: 30px;
        }}

        .metric-title {{

            color: #94a3b8;
            margin: 0;
            font-size: 14px;
        }}

        .metric-value {{

            color: white;
            margin: 0;
            ffont-size: 28px;
        }}

        body {{
            margin: 0;
            font-family: Inter, sans-serif;
        }}

        </style>

        {cards_html}
        """,
        height=350,
    )