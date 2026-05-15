import { useEffect, useState } from "react";
import Heatmap from "./components/Heatmap";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts"

function App() {


  useEffect(() => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}, []);

  const [data, setData] = useState({

  highest_streak: 0,

  consistency: 0,

  peak_time: "Loading...",

  timeline: []

});


const [username, setUsername] = useState("");

const [loading, setLoading] = useState(false);

const [error, setError] = useState("");

const [activeSection, setActiveSection] = useState("Dashboard")


const sectionMap = {
  Dashboard: "dashboard",
  Timeline: "timeline",
  Heatmap: "heatmap",
  Insights: "insights",
  Diagnostics: "diagnostics"
}


const fetchData = () => {

  setLoading(true);

  setError("");

  fetch(`http://127.0.0.1:5000/github/${username}`)

    .then((res) => res.json())

    .then((data) => {

      console.log(data)

      if (data.error || data.message) {

        setError("GitHub user not found");
        setData(data);

        setLoading(false);

        return;
      }

      console.log(data)



      setData(data);

      setLoading(false);

    })

    .catch((error) => {

      console.log(error);

      setError("Failed to analyze GitHub profile");

      setLoading(false);

    });

};

  return (


    
    <div className="min-h-screen bg-[#020617] text-[#f8fafc] flex overflow-hidden relative">
 {/* CINEMATIC BACKGROUND */}
<div className="absolute top-32 left-[35%] w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full pointer-events-none"></div>

<div className="absolute top-[450px] right-10 w-[350px] h-[350px] bg-cyan-400/10 blur-[140px] rounded-full pointer-events-none"></div>

<div className="absolute inset-0 overflow-hidden">

  {/* deep base */}
  <div className="absolute inset-0 bg-[#030712]"></div>

  {/* left ambient beam */}
  <div className="
  absolute
  top-[-10%]
  left-[-15%]
  w-[900px]
  h-[1400px]
  rotate-12
  bg-gradient-to-b
  from-[#2563eb]/20
  via-[#1d4ed8]/8
  to-transparent
  blur-[120px]
  "></div>

  {/* center vertical glow */}
  <div className="
  absolute
  top-[-20%]
  left-[35%]
  w-[500px]
  h-[1600px]
  bg-gradient-to-b
  from-[#3b82f6]/18
  via-[#2563eb]/6
  to-transparent
  blur-[100px]
  "></div>

  {/* right atmospheric wash */}
  <div className="
  absolute
  top-[10%]
  right-[-10%]
  w-[700px]
  h-[1200px]
  rotate-[-8deg]
  bg-gradient-to-b
  from-[#0ea5e9]/10
  via-[#2563eb]/5
  to-transparent
  blur-[140px]
  "></div>

  {/* subtle noise texture */}
  <div className="
  absolute inset-0
  opacity-[0.03]
  bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
  "></div>

  {/* vignette */}
  <div className="
  absolute inset-0
  bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,6,23,0.92)_100%)]
  "></div>

</div>


{/* SIDEBAR */}

<aside
  className="
  relative
  w-[260px]
  min-h-screen
  border-r
  border-white/10
  bg-black/20
  backdrop-blur-xl
  sticky
  top-0
  px-8
  py-10
  overflow-hidden
"
>

  {/* Ambient Glow */}

  <div
    className="
    absolute
    top-0
    left-0
    w-full
    h-40
    bg-cyan-400/5
    blur-3xl
    pointer-events-none
  "
  ></div>

  {/* Logo Section */}

  <div className="relative z-10">

    <h1 className="text-6xl font-black tracking-[-0.08em] text-white">
      BAM
    </h1>

    <p className="text-slate-500 text-sm mt-3 leading-6 max-w-[180px]">
      Behaviour Intelligence System
    </p>

  </div>

  {/* Navigation */}

  <div className="relative z-10 mt-24">

    <p className="text-xs tracking-[0.35em] text-slate-500 uppercase mb-8">
      Intelligence
    </p>

    <div className="space-y-3">

      {/* ACTIVE ITEM */}

     

        {["Dashboard", "Timeline", "Heatmap", "Insights", "Diagnostics"].map((item) => (

  <div
    key={item}

    onClick={() => {

  setActiveSection(item)

  const section = document.getElementById(sectionMap[item])

  section?.scrollIntoView({
    behavior: "smooth"
  })

}}

    className={`
      group
      flex
      items-center
      gap-4
      px-5
      py-4
      rounded-2xl
      transition-all
      duration-300
      cursor-pointer

      ${
        activeSection === item
          ? `
            bg-cyan-400/10
            border
            border-cyan-400/20
            text-cyan-300
            shadow-[0_0_20px_rgba(34,211,238,0.12)]
          `
          : `
            text-slate-400
            hover:text-cyan-300
            hover:bg-white/5
          `
      }
    `}
  >

    <div
      className={`
        w-2
        h-2
        rounded-full
        bg-cyan-300
        transition-all
        duration-300

        ${
          activeSection === item
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }
      `}
    ></div>

    <span className="text-[17px] font-medium tracking-[-0.02em]">
      {item}
    </span>

  </div>

))}

    

    </div>

  </div>

</aside>



      {/* MAIN */}

      <main className="
      relative z-10
      flex-1
      overflow-y-auto
      
      ">

       <div id="dashboard"  className="
max-w-[1180px]
mx-auto
px-16 py-10
">

          {/* HERO */}

<div className="grid grid-cols-[1.1fr_0.9fr] gap-16 items-center">

  {/* LEFT SIDE */}

  <div className="relative">

    {/* Ambient Glow */}

    <div className="
    absolute
    top-24
    left-24
    w-[260px]
    h-[260px]
    bg-blue-500/20
    blur-[140px]
    rounded-full
    pointer-events-none
    "></div>

    {/* Top Label */}

    <p className="
    text-[13px]
    tracking-[0.4em]
    text-[#60a5fa]
    uppercase
    font-medium
    ">
      Behavioural Activity Monitor
    </p>

    {/* BAM */}

    <div className="mt-8">

      <h1 className="
      text-[92px]
      font-black
      tracking-[-0.08em]
      leading-[0.88]
      text-white
      ">
        BAM
      </h1>

      {/* Subtitle */}

      <div className="flex items-center gap-5 mt-3">

        <div className="w-16 h-[2px] bg-[#3b82f6]"></div>

        <h2 className="
        text-[42px]
        font-semibold
        tracking-[-0.06em]
        text-[#60a5fa]
        ">
          Burst Coder
        </h2>

      </div>

    </div>

    {/* Pills */}

    <div className="flex gap-4 mt-10 flex-wrap">

      <div className="
      px-5
      py-3
      rounded-full
      bg-cyan-500/10
      border border-cyan-400/20
      text-cyan-300
      text-sm
      shadow-[0_0_30px_rgba(34,211,238,0.08)]
      ">
        ⚡ Peak Time: {data.peak_time}
      </div>

      <div className="
      px-5
      py-3
      rounded-full
      bg-blue-500/10
      border border-blue-400/20
      text-blue-300
      text-sm
      shadow-[0_0_30px_rgba(59,130,246,0.08)]
      ">
        📈 Active Days: {data.active_days}
      </div>

      <div className="
      px-5
      py-3
      rounded-full
      bg-indigo-500/10
      border border-indigo-400/20
      text-indigo-300
      text-sm
      shadow-[0_0_30px_rgba(99,102,241,0.08)]
      ">
        🧠 Rhythm: Burst Driven
      </div>

    </div>

    {/* Description */}

    <p className="
    text-[22px]
    leading-[1.8]
    text-[#94a3b8]
    mt-14
    max-w-[780px]
    font-[350]
    ">
      Behavioral analytics engine for developer productivity patterns.
    </p>

    {/* Search */}

    <div className="flex items-center gap-5 mt-14">

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="
        bg-white/[0.05]
        border border-white/10
        rounded-2xl
        px-6 py-5
        text-white
        outline-none
        backdrop-blur-xl
        w-[360px]
        shadow-[0_0_30px_rgba(255,255,255,0.03)]
        focus:border-cyan-400/30
        transition-all
        "
      />

      <button
        onClick={fetchData}
        className="
        bg-[#3b82f6]
        hover:bg-[#2563eb]
        hover:scale-[1.03]
        active:scale-[0.98]
        transition-all
        px-8
        py-5
        rounded-2xl
        font-semibold
        shadow-[0_0_40px_rgba(59,130,246,0.35)]
        "
      >
        Analyze
      </button>

    </div>

    {/* States */}

    {loading && (

      <p className="text-blue-300 mt-5">
        Analyzing behavioral patterns...
      </p>

    )}

    {error && (

      <p className="text-red-400 mt-5 text-sm">
        {error}
      </p>

    )}

  </div>

  {/* RIGHT SIDE */}

  <div className="
  relative
  h-[480px]
  rounded-[40px]
  border border-white/10
  bg-white/[0.04]
  backdrop-blur-2xl
  overflow-hidden
  shadow-[0_0_80px_rgba(59,130,246,0.14)]
  ">

    {/* Glow */}

    <div className="
    absolute
    top-10
    left-10
    w-52
    h-52
    rounded-full
    bg-cyan-400/20
    blur-[120px]
    "></div>

    {/* Top Card */}

    <div className="
    absolute
    top-8
    left-8
    right-8
    p-6
    rounded-3xl
    bg-black/20
    border border-white/10
    backdrop-blur-xl
    ">

      <p className="text-slate-400 text-sm">
        Current Behavioral Pattern
      </p>

      <h3 className="
      text-4xl
      font-bold
      mt-4
      text-cyan-300
      tracking-[-0.04em]
      ">
        Burst Productivity
      </h3>

    </div>

    {/* Center Orb */}

    <div className="
    absolute
    inset-0
    flex
    items-center
    justify-center
    ">

      <div className="relative">

        <div className="
        w-40
        h-40
        rounded-full
        border border-cyan-400/20
        animate-pulse
        "></div>

        <div className="
        absolute
        inset-8
        rounded-full
        bg-cyan-400/20
        blur-3xl
        "></div>

        <div className="
        absolute
        inset-[44px]
        rounded-full
        border border-cyan-300/40
        "></div>

      </div>

    </div>

    {/* Bottom Stats */}

    <div className="
    absolute
    bottom-8
    left-8
    right-8
    grid grid-cols-2
    gap-4
    ">

      <div className="
      rounded-3xl
      border border-white/10
      bg-white/[0.04]
      p-6
      ">

        <p className="text-slate-500 text-sm">
          Active Days
        </p>

        <h3 className="text-4xl font-bold mt-3 text-white">
          {data.active_days}
        </h3>

      </div>

      <div className="
      rounded-3xl
      border border-white/10
      bg-white/[0.04]
      p-6
      ">

        <p className="text-slate-500 text-sm">
          Consistency
        </p>

        <h3 className="text-4xl font-bold mt-3 text-cyan-300">
          {data.consistency}%
        </h3>

      </div>

    </div>

  </div>

</div>

          {/* METRICS */}

          <section id="timeline" className="
          grid
          grid-cols-3 max-w-[1000px]
          gap-6
          mt-20

          ">

            <div className="
            bg-[#0f172a]/70
            border border-white/[0.06]
            rounded-[28px]
            p-7
            backdrop-blur-xl
            hover:-translate-y-2
hover:border-cyan-400/20
hover:bg-white/[0.05]
hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]

transition-all duration-500
            bg-gradient-to-b from-white/[0.06] to-white/[0.015]
            text-[52px]
            shadow-[0_0_40px_rgba(0,0,0,0.45)]
            before:absolute
before:inset-0
before:rounded-[inherit]
before:p-[1px]
before:bg-gradient-to-b
before:from-white/[0.08]
before:to-transparent
before:pointer-events-none
relative overflow-hidden

            ">

              <p className="text-[#8b949e] text-sm">
                Recent Activity Streak
              </p>

              <h2 className="
              text-[42px]
              font-bold
              tracking-[-0.05em]
              mt-4
              ">
                {data.highest_streak}
              </h2>

            </div>



            <div className="
            bg-[#0f172a]/70
            border border-white/[0.06]
            
            rounded-[28px]
            p-7
            backdrop-blur-xl
            hover:-translate-y-2
hover:border-cyan-400/20
hover:bg-white/[0.05]
hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
transition-all duration-500
            text-[52px]
            shadow-[0_0_40px_rgba(0,0,0,0.45)]
            bg-gradient-to-b from-white/[0.06] to-white/[0.015]


            before:absolute
before:inset-0
before:rounded-[inherit]
before:p-[1px]
before:bg-gradient-to-b
before:from-white/[0.08]
before:to-transparent
before:pointer-events-none
relative overflow-hidden
            ">

              <p className="text-[#8b949e] text-sm">
                Consistency
              </p>

              <h2 className="
              text-[42px]
              font-bold
              tracking-[-0.05em]
              mt-4
              ">
                {data.consistency}%
              </h2>

            </div>



            <div className="
            bg-[#0f172a]/70
            border border-white/[0.06]
            
            rounded-[28px]
            p-7
            backdrop-blur-xl
            hover:-translate-y-2
hover:border-cyan-400/20
hover:bg-white/[0.05]
hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
transition-all duration-500
            bg-gradient-to-b from-white/[0.06] to-white/[0.015]
            shadow-[0_0_40px_rgba(0,0,0,0.45)]



            before:absolute
before:inset-0
before:rounded-[inherit]
before:p-[1px]
before:bg-gradient-to-b
before:from-white/[0.08]
before:to-transparent
before:pointer-events-none
relative overflow-hidden
            ">

              <p className="text-[#8b949e] text-sm">
                Peak Time
              </p>

              <h2 className="
              text-[36px]
leading-tight
max-w-[220px]
              font-bold
              tracking-[-0.05em]
              mt-5
              ">
                 {data.peak_time}
              </h2>

            </div>

          </section>



          {/* LOWER SECTION */}

          <section className="
          grid
          grid-cols-[2fr_1fr]
          gap-8
          mt-20
          ">

{/* LEFT COLUMN */}
  <div className="flex flex-col gap-8">
            {/* TIMELINE */}

            <div className="
            bg-white/[0.03]
            border border-white/5
            rounded-[24px]
            p-9
            min-h-[620px]
            backdrop-blur-xl


            before:absolute
before:inset-0
before:rounded-[inherit]
before:p-[1px]
before:bg-gradient-to-b
before:from-white/[0.08]
before:to-transparent
before:pointer-events-none
relative overflow-hidden

hover:-translate-y-2
hover:border-cyan-400/20
hover:bg-white/[0.05]
hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
transition-all
duration-500

            ">

              <h3 className="
text-[40px]
font-bold
tracking-[-0.05em]
">
  Activity Timeline
</h3>

<p className="
text-[#8b949e]
mt-3
text-[15px]
">
  Last 30 days
</p>

<div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
<div className="h-[350px] mt-10">

  <ResponsiveContainer width="100%" height="100%">

  <AreaChart data={data.timeline.slice(-30)}
  margin={{
  top: 10,
  right: 20,
  left: 0,
  bottom: 20
}}>

    <defs>

      <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">

        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.35}/>
<stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>

      </linearGradient>

    </defs>

    <XAxis
      dataKey="date"
      stroke="#334155"
      tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 11 }}
      tickLine={false}
      axisLine={false}
      minTickGap={35}
      tickFormatter={(value) => {
  const date = new Date(value)

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  })
}}
tickMargin={12}
axisLine={false}
tickLine={false}
    />

    <Tooltip
      cursor={{
  stroke: "rgba(255,255,255,0.04)",
  strokeWidth: 1
}}
      contentStyle={{
        background: "rgba(15,23,42,0.85)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        color: "white",
        backdropFilter: "blur(12px)"
      }}
       formatter={(value) => [`${value} pushes`, "Activity"]}

  labelFormatter={(label) => {
  const date = new Date(label)

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric"
  })
}}
    />

    <Area
  type="monotone"
  dataKey="count"
  stroke="#60a5fa"
  fill="url(#colorActivity)"
  strokeWidth={3}
  animationDuration={1200}
  connectNulls
  isAnimationActive={false}

  dot={{
    r: 3,
    strokeWidth: 1.5,
    fill: "#60a5fa",
    stroke: "#dbeafe"
  }}

  activeDot={{
    r: 8,
    fill: "#93c5fd",
    stroke: "#ffffff",
    strokeWidth: 2,
    filter: "drop-shadow(0 0 8px #60a5fa)"
  }}


  
/>

   

  </AreaChart>

</ResponsiveContainer>

</div>


            </div>


<div id="heatmap" className="mt-8 p-6 rounded-[32px] bg-white/10 border border-white/10
hover:-translate-y-2
hover:border-cyan-400/20
hover:bg-white/[0.05]
hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
transition-all
duration-500">

  <h2 className="text-4xl font-bold mb-6">
    Activity Heatmap
  </h2>

  <Heatmap timeline={data.timeline.slice(-90) || []} />

</div>
</div>
            



            {/* RIGHT PANEL */}

            <div className="space-y-7">


              {/* AI INSIGHT */}

              <div id="insights" className="
              bg-white/[0.03]
              border border-white/5
              rounded-[24px]
              p-8
              backdrop-blur-xl


              before:absolute
before:inset-0
before:rounded-[inherit]
before:p-[1px]
before:bg-gradient-to-b
before:from-white/[0.08]
before:to-transparent
before:pointer-events-none
relative overflow-hidden

hover:-translate-y-2
hover:border-cyan-400/20
hover:bg-white/[0.05]
hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
transition-all
duration-500
              ">

                <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
  Behavioral Analysis
</div>

                <h3 className="
                text-[30px]
                font-bold
                tracking-[-0.05em]
                ">
                   AI Insight
                </h3>

                <p className="
                text-[#8b949e]
                leading-[1.9]
                text-[17px]
                mt-6
                ">

                  {data.insight}

                </p>

              </div>



              {/* DIAGNOSTICS */}

              <div  id="diagnostics" className="
              bg-white/[0.03]
              border border-white/5
              rounded-2xl px-5 py-4
              p-8
              backdrop-blur-xl
              text-sm leading-7


              before:absolute
before:inset-0
before:rounded-[inherit]
before:p-[1px]
before:bg-gradient-to-b
before:from-white/[0.08]
before:to-transparent
before:pointer-events-none
relative overflow-hidden
leading-relaxed


hover:-translate-y-2
hover:border-cyan-400/20
hover:bg-white/[0.05]
hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
transition-all
duration-500
              ">

                <h3 className="
                text-[28px]
font-bold
leading-tight
                tracking-[-0.05em]
                ">
                   Diagnostics
                </h3>

                <div className="space-y-5 mt-7">

                  
                  {data.diagnostics?.map((item, index) => (

    <div
      key={index} 
     className={`rounded-3xl border p-5 text-sm leading-relaxed backdrop-blur-xl

${
  index === 0
    ? "border-blue-400/20 bg-blue-400/10 text-blue-100"
    : index === 1
    ? "border-amber-400/20 bg-amber-400/10 text-amber-100"
    : "border-emerald-400/20 bg-emerald-400/10 text-emerald-100"
}`}
    >

      {item}

    </div>

  ))}

                  

                </div>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  )
}

export default App