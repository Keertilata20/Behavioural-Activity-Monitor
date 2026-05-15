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





const fetchData = () => {

  setLoading(true);

  setError("");

  fetch(`http://127.0.0.1:5000/github/${username}`)

    .then((res) => res.json())

    .then((data) => {

      console.log(data)

      if (data.error || data.message) {

        setError("GitHub user not found");
        setData({
        highest_streak: 0,
        consistency: 0,
        peak_time: "No Data",
        timeline: [],
        insight: ""
    });

        setLoading(false);

        return;
      }

      console.log(data)



      setData({

  highest_streak: 0,

  consistency: 0,

  peak_time: "Night",

  insight: "GitHub contribution calendar successfully analyzed.",

  diagnostics: [],

  timeline: data

});

      setLoading(false);

    })

    .catch((error) => {

      console.log(error);

      setError("Failed to analyze GitHub profile");

      setLoading(false);

    });

};

  return (

    <div className="min-h-screen bg-[#030712] text-[#f8fafc] flex overflow-hidden relative">
 {/* CINEMATIC BACKGROUND */}

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

     <aside className="
     relative z-10
w-[250px]
min-h-screen
bg-[#020617]/70 backdrop-blur-xl
border-r border-white/5
px-6
py-10
sticky top-0
shadow-[inset_-1px_0_0_rgba(255,255,255,0.04)]
">

        <div>

          <h1 className="text-5xl font-black tracking-[-0.08em]">
            BAM
          </h1>

          <p className="text-[#94a3b8] text-sm mt-3 leading-6">
  Behaviour Intelligence System
</p>

          <div className="mt-16 space-y-8 mt-24">

            <p className="
group
flex items-center
gap-3
text-[#94a3b8]
hover:text-white
transition-all
duration-300
cursor-pointer
text-[22px]
font-medium
">
              Navigation
            </p>

            <div className="space-y-5 text-[16px]">

              <div className="group flex items-center gap-3 text-[#94a3b8] hover:text-white transition-all duration-300 cursor-pointer text-[18px] font-medium tracking-[-0.02em]">

  <div className="w-1.5 h-1.5 rounded-full bg-[#58a6ff] opacity-0 group-hover:opacity-100 transition-all"></div>

  Dashboard

</div>

              <div className="group flex items-center gap-3 text-[#94a3b8] hover:text-white transition-all duration-300 cursor-pointer text-[18px] font-medium tracking-[-0.02em]">

  <div className="w-1.5 h-1.5 rounded-full bg-[#58a6ff] opacity-0 group-hover:opacity-100 transition-all"></div>

  Timeline

</div>

              <div className="group flex items-center gap-3 text-[#94a3b8] hover:text-white transition-all duration-300 cursor-pointer text-[18px] font-medium tracking-[-0.02em]">

  <div className="w-1.5 h-1.5 rounded-full bg-[#58a6ff] opacity-0 group-hover:opacity-100 transition-all"></div>

  Heatmap

</div>

              <div className="group flex items-center gap-3 text-[#94a3b8] hover:text-white transition-all duration-300 cursor-pointer text-[18px] font-medium tracking-[-0.02em]">

  <div className="w-1.5 h-1.5 rounded-full bg-[#58a6ff] opacity-0 group-hover:opacity-100 transition-all"></div>

  Insights

</div>

              <div className="group flex items-center gap-3 text-[#94a3b8] hover:text-white transition-all duration-300 cursor-pointer text-[18px] font-medium tracking-[-0.02em]">

  <div className="w-1.5 h-1.5 rounded-full bg-[#58a6ff] opacity-0 group-hover:opacity-100 transition-all"></div>

  Diagnostics

</div>

            </div>

          </div>

        </div>

      </aside>



      {/* MAIN */}

      <main className="
      relative z-10
      flex-1
      overflow-y-auto
      
      ">

       <div className="
max-w-[1180px]
mx-auto
px-16 py-10
">

          {/* HERO */}

          <div className="max-w-[980px]">

  <p className="text-[13px] tracking-[0.35em] text-[#60a5fa] uppercase font-medium">
    Behavioural Activity Monitor
  </p>

  <div className="mt-10">
    <h1 className="text-[128px]
font-extrabold
tracking-[-0.07em] leading-[0.9]  text-white">
      BAM
    </h1>

    <div className="flex items-center gap-5 mt-2">
      <div className="w-14 h-[2px] bg-[#3b82f6]"></div>

      <h2 className="text-[50px] font-semibold tracking-[-0.06em] text-[#60a5fa]">
        Burst Coder
      </h2>
          <div className="
absolute
top-[240px]
left-[420px]
w-[180px]
h-[180px]
bg-[#3b82f6]
opacity-[0.18]
blur-[120px]
rounded-full
"></div>
    </div>
    
  </div>

  <p className="text-[24px]
leading-[1.8] text-[#94a3b8] mt-16 max-w-[900px] font-[350]">
    Analyze coding behavior, productivity rhythms,
    contribution intensity, and development momentum
    through GitHub activity intelligence.
  </p>

</div>

{/* Button */}

<div className="flex items-center gap-4 mt-12">

  <input
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    placeholder="Enter GitHub username"
    className="
    bg-white/[0.05]
    border border-white/10
    rounded-2xl
    px-5 py-4
    text-white
    outline-none
    backdrop-blur-xl
    w-[320px]
    "
  />

  <button
    onClick={fetchData}
    className="
    bg-[#3b82f6]
    hover:bg-[#2563eb]
    transition-all
    px-6 py-4
    rounded-2xl
    font-semibold
    "
  >
    Analyze
  </button>



</div>

{loading && (

  <p className="text-blue-300 mt-4">
    Analyzing behavioral patterns...
  </p>

)}

{error && (

  <p className="text-red-400 mt-4 text-sm">
    {error}
  </p>

)}

          {/* METRICS */}

          <section className="
          grid
          grid-cols-3 max-w-[980px]
          gap-6
          mt-20

          ">

            <div className="
            bg-[#0f172a]/70
            border border-white/[0.06]
            rounded-[28px]
            p-7
            backdrop-blur-xl
            hover:border-[#58a6ff]/20
            hover:-translate-y-1
hover:bg-[#131d2e]
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
            hover:-translate-y-1
            rounded-[28px]
            p-7
            backdrop-blur-xl
            hover:border-[#58a6ff]/20
hover:bg-[#131d2e]
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
            hover:-translate-y-1
            rounded-[28px]
            p-7
            backdrop-blur-xl
            hover:border-[#58a6ff]/20
hover:bg-[#131d2e]
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
          mt-24
          ">


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
  Last 90 days
</p>

<div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
<div className="h-[350px] mt-10">

  <ResponsiveContainer width="100%" height="100%">

  <AreaChart data={data.timeline.slice(-90)}
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
<div className="mt-8 p-6 rounded-[32px] bg-white/10 border border-white/10">

  <h2 className="text-4xl font-bold mb-6">
    Activity Heatmap
  </h2>

  <Heatmap timeline={data.timeline.slice(-90) || []} />

</div>

            </div>



            {/* RIGHT PANEL */}

            <div className="space-y-7">


              {/* AI INSIGHT */}

              <div className="
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

              <div className="
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