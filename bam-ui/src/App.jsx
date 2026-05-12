function App() {

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
    </div>

  </div>

  <p className="text-[24px]
leading-[1.8] text-[#94a3b8] mt-16 max-w-[900px] font-[350]">
    Analyze coding behavior, productivity rhythms,
    contribution intensity, and development momentum
    through GitHub activity intelligence.
  </p>

</div>



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
                Highest Streak
              </p>

              <h2 className="
              text-[42px]
              font-bold
              tracking-[-0.05em]
              mt-4
              ">
                12
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
                53%
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
                Afternoon
              </h2>

            </div>

          </section>



          {/* LOWER SECTION */}

          <section className="
          grid
          grid-cols-[1.9fr_0.9fr]
          gap-8
          mt-24
          ">


            {/* TIMELINE */}

            <div className="
            bg-white/[0.03]
            border border-white/5
            rounded-[24px]
            p-9
            min-h-[500px]
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
              text-[42px]
              font-black
              tracking-[-0.05em]
              ">
                Activity Timeline
              </h3>

              <p className="
              text-[#8b949e]
              mt-3
              text-[16px]
              ">
                Last 90 days
              </p>

              <div className="mt-16 h-[240px] rounded-2xl bg-gradient-to-b from-[#13203a] to-[#0b1220] border border-white/5"></div>

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

                <h3 className="
                text-[38px]
                font-black
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

                  Strong afternoon productivity patterns detected.
                  High-intensity burst coding behavior observed.

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
              ">

                <h3 className="
                text-[32px]
font-black
leading-tight
                tracking-[-0.05em]
                ">
                   Diagnostics
                </h3>

                <div className="space-y-4 mt-7">

                  <div className="
                  bg-red-500/10
text-red-300
border border-red-500/10
                  rounded-2xl
                  px-5 py-5
                  
                  text-[15px]
                  leading-7
                  ">

                    Significant drop detected on 2026-04-28

                  </div>


                  <div className="
                  bg-emerald-500/10
text-emerald-300
border border-emerald-500/10
                  rounded-2xl
                  px-5 py-5
                  
                  text-[15px]
                  leading-7
                  ">

                    Major productivity spike on 2026-03-05

                  </div>

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