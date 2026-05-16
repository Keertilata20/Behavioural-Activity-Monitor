import { useEffect, useState } from "react";
import Heatmap from "./components/Heatmap";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine
} from "recharts"

function App() {





const [username, setUsername] = useState("");

const [loading, setLoading] = useState(false);

const [error, setError] = useState("");

const [activeSection, setActiveSection] = useState("Dashboard")

const [hasAnalyzed, setHasAnalyzed] = useState(false)

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 const [scrollProgress, setScrollProgress] = useState(0)

 const [data, setData] = useState({
  highest_streak: 0,
  consistency: 0,
  peak_time: "Loading...",
  insight: "Awaiting behavioral analysis...",
  diagnostics: [],
  timeline: []
})

useEffect(() => {

  const handleScroll = () => {

    const scrollTop = window.scrollY

    const docHeight =
      document.documentElement.scrollHeight -
      window.innerHeight

    const progress =
      (scrollTop / docHeight) * 100

    setScrollProgress(progress)
  }

  window.addEventListener("scroll", handleScroll)

  return () =>
    window.removeEventListener("scroll", handleScroll)

}, [])

useEffect(() => {

  const handleSectionScroll = () => {

    const sections = [
      "dashboard",
      "timeline",
      "heatmap",
      "insights",
      "diagnostics"
    ]

    let currentSection = "Dashboard"

    sections.forEach((id) => {

      const section =
        document.getElementById(id)

      if (!section) return

      const rect =
        section.getBoundingClientRect()

      if (
        rect.top <= 160 &&
        rect.bottom >= 160
      ) {

        currentSection =
          id.charAt(0).toUpperCase() +
          id.slice(1)

      }

    })

    setActiveSection(currentSection)

  }

  window.addEventListener(
    "scroll",
    handleSectionScroll
  )

  return () =>
    window.removeEventListener(
      "scroll",
      handleSectionScroll
    )

}, [])


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

  fetch(`https://bam-dashboard.onrender.com/analyze/${username}`)

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
      setHasAnalyzed(true)

      setLoading(false);

    })

    .catch((error) => {

      console.log(error);

      setError("Failed to analyze GitHub profile");

      setLoading(false);

    });

};


const getPersona = (data) => {

  if (data.consistency > 70) {
    return {
      title: "Consistent Maintainer",
      description:
        "Stable contribution rhythm detected with disciplined development cycles."
    }
  }

  if (data.peak_time === "Night") {
    return {
      title: "Night Owl",
      description:
        "Late-hour productivity bursts detected across coding sessions."
    }
  }

  if (data.active_days > 50) {
    return {
      title: "Sprint Builder",
      description:
        "High-volume contribution bursts detected with rapid development momentum."
    }
  }

  return {
    title: "Adaptive Developer",
    description:
      "Flexible coding behavior observed across varying contribution patterns."
  }

}

const persona = hasAnalyzed
  ? getPersona(data)
  : {
      title: "Awaiting Analysis",
      description:
        "Enter a GitHub username to generate a behavioral productivity profile."
    }

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




{/* MOBILE TOPBAR */}

<div
  className="
  lg:hidden
  fixed
  top-0
  left-0
  right-0
  z-[10001]
  h-[72px]
  px-5
  flex
  items-center
  justify-between
  border-b
  border-white/10
  bg-black/40
  backdrop-blur-2xl
  "
>

  {/* Logo */}

  <div className="flex items-center gap-3">

    <h1 className="text-3xl font-black tracking-[-0.08em] text-white">
      BAM
    </h1>

  </div>

  {/* Mobile Button */}

 <button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="
  w-11
  h-11
  rounded-xl
  border
  border-cyan-400/20
  bg-cyan-400/10
  flex
  items-center
  justify-center
  text-cyan-300
  "
>
  ☰
</button>
</div>

{/* MOBILE MENU */}

<div
  className={`
 lg:hidden
fixed
top-[80px]
left-0
bottom-0
w-[280px]
z-[10000]
bg-[#020617]
border-r
border-white/10
backdrop-blur-2xl
px-6
py-8
flex
flex-col
gap-4
transition-all
duration-300




  ${
    mobileMenuOpen
      ? "translate-x-0"
      : "-translate-x-full"
  }
  `}
>

  {[
    "Dashboard",
    "Timeline",
    "Heatmap",
    "Insights",
    "Diagnostics",
  ].map((item) => (

    <button
      key={item}

      onClick={() => {

        setActiveSection(item);

        setMobileMenuOpen(false);

        document
          .getElementById(item.toLowerCase())
          ?.scrollIntoView({
            behavior: "smooth",
          });

      }}

      className={`
      w-full
      text-left
      px-5
      py-4
      rounded-2xl
      border
      transition-all
      duration-300

      hover:border-cyan-400/30
hover:bg-cyan-400/15
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
hover:-translate-y-1

      ${
        activeSection === item
          ? `
            border-cyan-400/20
            bg-cyan-400/10
            text-cyan-300
          `
          : `
            border-white/10
            bg-white/[0.03]
            text-slate-300
          `
      }
      `}
    >

      <div className="flex items-center gap-3">

  <div
    className={`
    w-2 h-2 rounded-full bg-cyan-300 transition-all duration-300

    ${
      activeSection === item
        ? "opacity-100"
        : "opacity-0"
    }
    `}
  ></div>

  <span>{item}</span>

</div>

    </button>

  ))}

</div>
{mobileMenuOpen && (
  <div
    onClick={() => setMobileMenuOpen(false)}
    className="
    fixed
    inset-0
    bg-black/50
    backdrop-blur-sm
    z-[9998]
    lg:hidden
    "
  ></div>
)}


{/* SIDEBAR */}

<aside className="
hidden lg:flex
flex-col
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
">
  

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


 <div
  className="
  fixed
  top-0
  left-0

  h-[4px]
  z-[99999]

  bg-gradient-to-r
  from-cyan-400
  via-blue-500
  to-violet-500

  shadow-[0_0_12px_rgba(34,211,238,0.7)]

  transition-all
  duration-150
  "
  style={{
    width: `${scrollProgress}%`
  }}
></div>



      {/* MAIN */}

      <main className="
      relative z-10
      flex-1
      overflow-y-auto
      pt-[90px] lg:pt-0
      ">

      
        

       <div id="dashboard"  className="
max-w-[1180px]
mx-auto
px-6 md:px-10 xl:px-20
">

          {/* HERO */}

<div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8 items-start">

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
      text-[70px] md:text-[110px] xl:text-[120px]
      font-black
      tracking-[-0.08em]
      leading-[0.88]
      text-white
      ">
        BAM
      </h1>

      {/* Subtitle */}

      <div className="flex items-center gap-5 mt-3">

        

        <h2 className="
        text-[28px] md:text-[30px] xl:text-[38px]
        font-semibold
        tracking-[-0.06em]
        text-[#60a5fa]
        ">
          Developer Activity Intelligence
        </h2>

      </div>

    </div>

    {/* Pills*/}
    <div className="flex gap-4 mt-10 flex-wrap">

  <div
    className="
    px-5
    py-3
    rounded-full
    bg-cyan-500/10
    border border-cyan-400/20
    text-cyan-300
    text-sm
    shadow-[0_0_30px_rgba(34,211,238,0.08)]
    backdrop-blur-xl
    "
  >
    ✦ Behavior Mapping
  </div>

  <div
    className="
    px-5
    py-3
    rounded-full
    bg-blue-500/10
    border border-blue-400/20
    text-blue-300
    text-sm
    shadow-[0_0_30px_rgba(59,130,246,0.08)]
    backdrop-blur-xl
    "
  >
    ✦ Pattern Intelligence
  </div>

  <div
    className="
    px-5
    py-3
    rounded-full
    bg-indigo-500/10
    border border-indigo-400/20
    text-indigo-300
    text-sm
    shadow-[0_0_30px_rgba(99,102,241,0.08)]
    backdrop-blur-xl
    "
  >
    ✦ Contribution Signals
  </div>

</div>

    

    {/* Description */}

    <p className="
    text-[16px] md:text-[18px] xl:text-[22px]
    leading-[1.8]
    text-[#94a3b8]
    mt-14
    max-w-[780px]
    font-[350]
    ">
      Analyze coding rhythm, contribution intensity, and behavioural development patterns from GitHub activity.
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
      
        active:scale-[0.98]
        transition-all
        px-8
        py-5
        rounded-2xl
        

        bg-gradient-to-br
from-cyan-400
to-blue-500

text-white
font-semibold

shadow-[0_0_30px_rgba(34,211,238,0.25)]

hover:scale-[1.03]
hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]

transition-all
duration-300
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

<div
  className="
  relative
  min-h-[220px] xl:h-[350px]
  min-w-[200px] xl:w-[380px]
  
  rounded-[40px]
  border border-white/10
  bg-white/[0.04]
  backdrop-blur-2xl
  shadow-[0_0_80px_rgba(59,130,246,0.10)]
  overflow-hidden
  p-10
  flex
  flex-col
  hover:-translate-y-2
hover:border-cyan-400/20
hover:bg-white/[0.05]
hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]

transition-all duration-500
  lg:w-[420px]
lg:mt-14
  justify-between
"
>

  {/* ambient glow */}

  <div className="
  absolute
  top-0
  right-0
  w-[300px]
  h-[300px]
  bg-cyan-400/10
  blur-[120px]
  rounded-full
  "></div>


 

  {/* content */}

  <div className="relative z-10">

    <p className="
    text-slate-500
    text-[10px]
    tracking-[0.3em]
    uppercase
    ">
      Behavioural Core
    </p>
    

    <h2 className="
    text-[34px]
    max-w-[280px]
    leading-[1]
    tracking-[-0.08em]
    font-bold
    text-cyan-300
    mt-8
    ">
      
  {persona.title}
</h2>
    <div className="
absolute
top-[35%]
left-[35%]
w-[220px]
h-[220px]
bg-cyan-400/5
blur-[120px]
rounded-full
pointer-events-none
"></div>

    <p className="
    mt-5
    text-slate-400
    text-[16px]
    leading-8
    max-w-[420px]
    leading-[2]
    ">
     
  {persona.description}

    </p>
    

  </div>
{/* Orbital Rings */}

<div className="absolute bottom-[-200px] right-[-60px] w-[420px] h-[420px]">

  <div className="absolute inset-0 w-[520px]
h-[520px] rounded-full border border-cyan-400/10"></div>

  <div className="absolute inset-[60px] w-[380px]
h-[380px] rounded-full border border-cyan-400/10"></div>

  <div className="absolute top-[120px] left-[100px] w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.6)]"></div>

</div>

  

</div>

</div>

          {/* METRICS */}

          <section id="metrics" className="
          grid
          grid-cols-3 max-w-[1000px]
          gap-6
          mt-12

          ">

            <div className="
relative
overflow-hidden

rounded-[28px]
p-7

border border-amber-400/20

backdrop-blur-xl

bg-gradient-to-br
from-amber-500/10
via-[#0f172a]/80
to-orange-500/5

shadow-[0_0_40px_rgba(0,0,0,0.45)]

hover:-translate-y-2
hover:border-amber-400/30
hover:shadow-[0_0_40px_rgba(251,191,36,0.10)]

transition-all
duration-500

before:absolute
before:inset-0
before:rounded-[inherit]
before:p-[1px]
before:bg-gradient-to-b
before:from-white/[0.08]
before:to-transparent
before:pointer-events-none
">

              <p className="text-[#8b949e] text-sm">
                Recent Activity Streak
              </p>

              <h2
  className="
  text-[32px]
  sm:text-[38px]
  leading-tight
  break-words
  text-amber-300
  font-bold
  tracking-[-0.05em]
  mt-5
  "
>
                {data.highest_streak}
              </h2>
              <div className="
absolute
top-[-30px]
right-[-30px]
w-[120px]
h-[120px]
rounded-full
blur-3xl
opacity-20
bg-current
"></div>

            </div>



            <div className="
relative
overflow-hidden

rounded-[28px]
p-7

border border-cyan-400/20

backdrop-blur-xl

bg-gradient-to-br
from-cyan-500/10
via-[#0f172a]/80
to-blue-500/5

shadow-[0_0_40px_rgba(0,0,0,0.45)]

hover:-translate-y-2
hover:border-cyan-400/20
hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]

transition-all
duration-500

before:absolute
before:inset-0
before:rounded-[inherit]
before:p-[1px]
before:bg-gradient-to-b
before:from-white/[0.08]
before:to-transparent
before:pointer-events-none
">

              <p className="text-[#8b949e] text-sm">
                Consistency
              </p>

              <h2
  className="
  text-[32px]
  sm:text-[38px]
  leading-tight
  break-words
  text-cyan-300
  font-bold
  tracking-[-0.05em]
  mt-5
  "
>
                {data.consistency}%
              </h2>
              <div className="
absolute
top-[-30px]
right-[-30px]
w-[120px]
h-[120px]
rounded-full
blur-3xl
opacity-20
bg-current
"></div>

            </div>



            <div className="
relative
overflow-hidden

rounded-[28px]
p-7

border border-violet-400/20

backdrop-blur-xl

bg-gradient-to-br
from-violet-500/10
via-[#0f172a]/80
to-indigo-500/5

shadow-[0_0_40px_rgba(0,0,0,0.45)]

hover:-translate-y-2
hover:border-violet-400/30
hover:shadow-[0_0_40px_rgba(167,139,250,0.10)]

transition-all
duration-500

before:absolute
before:inset-0
before:rounded-[inherit]
before:p-[1px]
before:bg-gradient-to-b
before:from-white/[0.08]
before:to-transparent
before:pointer-events-none

">

              <p className="text-[#8b949e] text-sm">
                Peak Time
              </p>

              <h2
  className="
  text-[32px]
  sm:text-[38px]
  leading-tight
  break-words
  text-violet-300
  font-bold
  tracking-[-0.05em]
  mt-5
  "
>
                 {loading ? "Analyzing..." : data.peak_time}
              </h2>
              <div className="
absolute
top-[-30px]
right-[-30px]
w-[120px]
h-[120px]
rounded-full
blur-3xl
opacity-20
bg-current
"></div>

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

  <div id="timeline"
    className="

    border-cyan-400/20
from-cyan-500/10
to-blue-500/5
    relative
    overflow-hidden

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

    hover:-translate-y-2
    hover:border-cyan-400/20
    hover:bg-white/[0.05]
    hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]

    transition-all
    duration-500
    "
  >

    {/* TITLE */}

    <h3
      className="
      text-[40px]
      font-bold
      tracking-[-0.05em]
      "
    >
      Activity Timeline
    </h3>

    <p
      className="
      text-[#8b949e]
      mt-3
      text-[15px]
      "
    >
      Last 30 days
    </p>

    {/* LABEL */}

    <div className="flex items-center gap-2 mt-7">

      <div className="w-2 h-2 rounded-full bg-cyan-300"></div>

      <p className="text-cyan-300 text-sm tracking-wide">
        Contribution Frequency
      </p>

    </div>
   <div className="
absolute
top-[-40px]
right-[-40px]
w-[140px]
h-[140px]
rounded-full
blur-3xl
opacity-20
bg-current
"></div>

    {/* CHART AREA */}

    <div
      className="
      h-[280px] md:h-[350px]
      mt-7
      relative
      "
    >

      {/* Soft Background Glow */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-blue-500/[0.03]
        to-transparent
        pointer-events-none
        bg-[#0b1120]/70
        "
      ></div>
      <div className="
absolute
top-0
left-0
right-0
h-24
bg-gradient-to-b
from-white/[0.03]
to-transparent
pointer-events-none
"></div>

      <ResponsiveContainer width="100%" height="100%">

        <AreaChart
          data={data.timeline.slice(-30)}
          margin={{
            top: 20,
            right: 20,
            left: -10,
            bottom: 10
          }}
        >

          {/* GRID */}

          <CartesianGrid
            stroke="rgba(255,255,255,0.03)"
            vertical={false}
          />

          {/* DEFINITIONS */}

          <defs>

            <linearGradient
              id="colorActivity"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#3b82f6"
                stopOpacity={0.35}
              />

              <stop
                offset="95%"
                stopColor="#3b82f6"
                stopOpacity={0}
              />

            </linearGradient>

            {/* Glow Filter */}

            <filter id="glow">

              <feGaussianBlur
                stdDeviation="2"
                result="coloredBlur"
              />

              <feMerge>

                <feMergeNode in="coloredBlur" />

                <feMergeNode in="SourceGraphic" />

              </feMerge>

            </filter>

          </defs>

          {/* X AXIS */}

          <XAxis
            dataKey="date"
            stroke="#334155"
            tick={{
              fill: "rgba(255,255,255,0.45)",
              fontSize: 11
            }}
            tickLine={false}
            axisLine={false}
            minTickGap={35}
            tickMargin={12}
            tickFormatter={(value) => {

              const date = new Date(value)

              return date.toLocaleDateString(
                "en-US",
                {
                  month: "short",
                  day: "numeric"
                }
              )

            }}
          />

          {/* Y AXIS */}

          <YAxis
            stroke="#334155"
            tick={{
              fill: "rgba(255,255,255,0.25)",
              fontSize: 10
            }}
            tickLine={false}
            axisLine={false}
            width={30}
          />

          {/* TOOLTIP */}

          <Tooltip

            cursor={{
              stroke: "rgba(255,255,255,0.05)",
              strokeWidth: 1
            }}

            contentStyle={{
              background: "rgba(15,23,42,0.92)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              color: "white",
              backdropFilter: "blur(12px)"
            }}

            formatter={(value) => [
              `${value} pushes`,
              "Activity"
            ]}

            labelFormatter={(label) => {

              const date = new Date(label)

              return date.toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric"
                }
              )

            }}
          />

          {/* BASELINE */}

          <ReferenceLine
            y={0}
            stroke="rgba(255,255,255,0.08)"
          />

          {/* AREA */}

          <Area

            type="monotone"

            dataKey="count"

            stroke="#60a5fa"

            fill="url(#colorActivity)"

            strokeWidth={4}

            filter="url(#glow)"

            animationDuration={1200}

            connectNulls

            isAnimationActive={false}

            dot={{

              r: 4,

              strokeWidth: 1.5,

              fill: "#60a5fa",

              stroke: "#dbeafe"

            }}

            activeDot={{

              r: 8,

              fill: "#93c5fd",

              stroke: "#ffffff",

              strokeWidth: 2,

              filter:
                "drop-shadow(0 0 8px #60a5fa)"

            }}

          />

        </AreaChart>

      </ResponsiveContainer>

    </div>

  </div>

{/*heatmap*/}

<div id="heatmap" className="
relative overflow-hidden

rounded-[28px]
p-8

border border-violet-400/20

bg-gradient-to-br
from-violet-500/10
via-[#0f172a]/80
to-indigo-500/5

backdrop-blur-xl

shadow-[0_0_40px_rgba(0,0,0,0.45)]

hover:-translate-y-2
hover:border-violet-400/30
hover:shadow-[0_0_40px_rgba(167,139,250,0.10)]

transition-all duration-500

before:absolute
before:inset-0
before:rounded-[inherit]
before:p-[1px]
before:bg-gradient-to-b
before:from-white/[0.08]
before:to-transparent
before:pointer-events-none



">
  <div className="
absolute
top-[-40px]
right-[-40px]
w-[140px]
h-[140px]
rounded-full
blur-3xl
opacity-20
bg-current
"></div>

  <h3 className="
text-[40px]
font-bold
tracking-[-0.05em]
">
  Activity Heatmap
</h3>

<div
  className="
  mt-8
  rounded-[20px]
  border border-white/5
  bg-black/10
  p-6
  backdrop-blur-md
  relative
  overflow-hidden
  "
>

  {/* Optional subtle glow */}
  <div className="
  absolute
  inset-0
  bg-gradient-to-b
  from-cyan-500/[0.03]
  to-transparent
  pointer-events-none
  "></div>

  {/* YOUR DOT GRID HERE */}
  <Heatmap timeline={data.timeline.slice(-90) || []} />

</div>

  

</div>
</div>
            



            {/* RIGHT PANEL */}

            <div className="space-y-7">


              {/* AI INSIGHT */}

              <div id="insights" className="
relative overflow-hidden

rounded-[28px]
p-8

border border-emerald-400/20

bg-gradient-to-br
from-emerald-500/10
via-[#0f172a]/80
to-cyan-500/5

backdrop-blur-xl

hover:-translate-y-2
hover:border-emerald-400/30
hover:shadow-[0_0_40px_rgba(16,185,129,0.10)]

transition-all duration-500

">

<div className="
absolute
top-[-40px]
right-[-40px]
w-[140px]
h-[140px]
rounded-full
blur-3xl
opacity-20
bg-current
"></div>


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
                mt-8
leading-[1.8]
                ">

                  {data.insight}

                </p>

              </div>



              {/* DIAGNOSTICS */}

              <div id="diagnostics" className="
relative overflow-hidden

rounded-[28px]
p-8

border border-amber-400/20

bg-gradient-to-br
from-amber-500/10
via-[#0f172a]/80
to-orange-500/5

backdrop-blur-xl

shadow-[0_0_40px_rgba(0,0,0,0.45)]

hover:-translate-y-2
hover:border-amber-400/30
hover:shadow-[0_0_40px_rgba(251,191,36,0.10)]

transition-all duration-500

before:absolute
before:inset-0
before:rounded-[inherit]
before:p-[1px]
before:bg-gradient-to-b
before:from-white/[0.08]
before:to-transparent
before:pointer-events-none
">
  <div className="
absolute
top-[-40px]
right-[-40px]
w-[140px]
h-[140px]
rounded-full
blur-3xl
opacity-20
bg-current
"></div>

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
    ? "border-blue-400/20 bg-blue-500/10 text-blue-100"
    : index === 1
    ? "border-amber-400/20 bg-amber-500/10 text-amber-100"
    : "border-emerald-400/20 bg-emerald-500/10 text-emerald-100"
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