# 🧠 Behavioural Activity Monitor

A system that analyzes developer activity patterns from GitHub commits to uncover behavioral insights.

Instead of just counting commits, this project focuses on understanding **how** a developer works — identifying patterns in consistency, intensity, and working hours.

---

## 🚀 What it does

*  Analyzes commit activity across multiple repositories
*  Detects most active working hours
*  Calculates consistency and streak patterns
*  Identifies activity spikes and drops
*  Generates human-readable behavioral insights

---

## 🧬 Core Idea

> Development activity is not just data — it's behavior.

This system transforms raw commit history into meaningful interpretations like:

* “Bursty work pattern with high activity”
* “Consistent daily development habits”
* “Peak productivity during evening hours”

---

## ⚙️ How it works

1. Fetches commit data using GitHub API
2. Aggregates data across repositories
3. Extracts features (time, frequency, patterns)
4. Applies behavioral analysis logic
5. Outputs insights + alerts

---

## 📊 Example Output

```
--- Behavior Summary ---
Most active time: Night
Consistency Score: 51%

Insight:
You show a bursty work pattern with high activity levels, mostly during night hours.

Streak Analysis:
Longest Streak: 7 days

⚠️ Behavior Alerts:

📈 Major spike in activity on 2026-02-28
⚠️ Significant drop in activity on 2026-04-30
```

---

## 🛠 Tech Stack

* Python
* GitHub REST API
* Data processing (datetime, aggregation logic)

---

## 🌱 Future Improvements

*  Interactive dashboard (Streamlit / React)
*  GitHub token-based authentication
*  Advanced anomaly detection
*  Machine learning-based pattern classification

---

## ✨ Why this project?

This project reflects an interest in:

* Behavioral analysis
* AI-driven insights
* Security & pattern recognition

It’s a step toward building systems that **observe, adapt, and interpret user behavior**.

---

⭐ If you found this interesting, feel free to explore or contribute!
