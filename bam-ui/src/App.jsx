function App() {

  return (

    <div className="min-h-screen bg-[#020617] text-[#f8fafc] flex overflow-hidden relative">
      <div className="fixed top-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full"></div>
      <div className="fixed bottom-[-250px] left-[20%] w-[500px] h-[500px] bg-cyan-400/10 blur-[180px] rounded-full"></div>
      
      {/* SIDEBAR */}

     <aside className="
w-[270px]
min-h-screen
border-r border-white/5
bg-black/30
backdrop-blur-xl
px-8
py-10
sticky top-0
">

        <div>

          <h1 className="text-5xl font-black tracking-[-0.08em]">
            BAM
          </h1>

          <p className="text-[#94a3b8] text-sm mt-3 leading-6">
  Behaviour Intelligence System
</p>

          <div className="mt-16">

            <p className="
group
flex items-center
gap-3
text-[#94a3b8]
hover:text-white
transition-all
duration-300
cursor-pointer
text-[15px]
font-medium
">
              Navigation
            </p>

            <div className="space-y-5 text-[16px]">

              <div className="group flex items-center gap-3 text-[#94a3b8] hover:text-white transition-all duration-300 cursor-pointer text-[15px] font-medium">

  <div className="w-1.5 h-1.5 rounded-full bg-[#58a6ff] opacity-0 group-hover:opacity-100 transition-all"></div>

  Dashboard

</div>

              <div className="group flex items-center gap-3 text-[#94a3b8] hover:text-white transition-all duration-300 cursor-pointer text-[15px] font-medium">

  <div className="w-1.5 h-1.5 rounded-full bg-[#58a6ff] opacity-0 group-hover:opacity-100 transition-all"></div>

  Timeline

</div>

              <div className="group flex items-center gap-3 text-[#94a3b8] hover:text-white transition-all duration-300 cursor-pointer text-[15px] font-medium">

  <div className="w-1.5 h-1.5 rounded-full bg-[#58a6ff] opacity-0 group-hover:opacity-100 transition-all"></div>

  Heatmap

</div>

              <div className="group flex items-center gap-3 text-[#94a3b8] hover:text-white transition-all duration-300 cursor-pointer text-[15px] font-medium">

  <div className="w-1.5 h-1.5 rounded-full bg-[#58a6ff] opacity-0 group-hover:opacity-100 transition-all"></div>

  Insights

</div>

              <div className="group flex items-center gap-3 text-[#94a3b8] hover:text-white transition-all duration-300 cursor-pointer text-[15px] font-medium">

  <div className="w-1.5 h-1.5 rounded-full bg-[#58a6ff] opacity-0 group-hover:opacity-100 transition-all"></div>

  Diagnostics

</div>

            </div>

          </div>

        </div>

      </aside>



      {/* MAIN */}

      <main className="
      flex-1
      overflow-y-auto
      bg-[radial-gradient(circle_at_top,#12203a_0%,#070b14_55%)]
      ">

       <div className="
max-w-[1280px]
mx-auto
px-10
py-10
">

          {/* HERO */}

          <section className="max-w-[780px]">

            <p className="
            text-[11px]
            font-semibold
            tracking-[0.35em]
            text-[#58a6ff]
            uppercase
            ">
              Behavioural Activity Monitor
            </p>


            <h1 className="
            text-[70px]
            font-black
            tracking-[-0.08em]
            leading-[0.9]
            mt-4
            tracking-[-0.12em]
            ">
              BAM
            </h1>


            <div className="flex items-center gap-4 mt-6">

              <span className="text-5xl">
                ⚡
              </span>

              <h2 className="
              text-5xl
              font-bold
              tracking-[-0.05em]
              text-[#58a6ff]
              ">
                Burst Coder
              </h2>

            </div>


            <p className="
            text-[#8b949e]
            text-xl
            leading-[1.8]
            mt-10
            max-w-[780px]
            leading-[1.8]
            ">

              Analyze coding behavior, productivity rhythms,
              contribution intensity, and development momentum
              through GitHub activity intelligence.

            </p>

          </section>



          {/* METRICS */}

          <section className="
          grid
          grid-cols-3 max-w-[980px]
          gap-6
          mt-16
          ">

            <div className="
            bg-white/[0.03]
            border border-white/5
            rounded-[28px]
            p-7
            backdrop-blur-xl
            hover:border-[#58a6ff]/20
            transition-all duration-300
            bg-gradient-to-b from-white/[0.06] to-white/[0.015]
            text-[52px]
            shadow-[0_0_40px_rgba(0,0,0,0.35)]
            ">

              <p className="text-[#8b949e] text-sm">
                Highest Streak
              </p>

              <h2 className="
              
              font-black
              tracking-[-0.05em]
              mt-4
              ">
                12
              </h2>

            </div>



            <div className="
            bg-white/[0.03]
            border border-white/5
            rounded-[28px]
            p-7
            backdrop-blur-xl
            hover:border-[#58a6ff]/20
            transition-all duration-300
            text-[52px]
            shadow-[0_0_40px_rgba(0,0,0,0.35)]
            bg-gradient-to-b from-white/[0.06] to-white/[0.015]
            ">

              <p className="text-[#8b949e] text-sm">
                Consistency
              </p>

              <h2 className="
              text-[52px]
              font-black
              tracking-[-0.05em]
              mt-4
              ">
                53%
              </h2>

            </div>



            <div className="
            bg-white/[0.03]
            border border-white/5
            rounded-[28px]
            p-7
            backdrop-blur-xl
            hover:border-[#58a6ff]/20
            transition-all duration-300
            bg-gradient-to-b from-white/[0.06] to-white/[0.015]
            shadow-[0_0_40px_rgba(0,0,0,0.35)]
            ">

              <p className="text-[#8b949e] text-sm">
                Peak Time
              </p>

              <h2 className="
              text-[52px]
              font-black
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
          mt-16
          ">


            {/* TIMELINE */}

            <div className="
            bg-white/[0.03]
            border border-white/5
            rounded-[32px]
            p-9
            min-h-[500px]
            backdrop-blur-xl
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

            </div>



            {/* RIGHT PANEL */}

            <div className="space-y-7">


              {/* AI INSIGHT */}

              <div className="
              bg-white/[0.03]
              border border-white/5
              rounded-[32px]
              p-8
              backdrop-blur-xl
              ">

                <h3 className="
                text-[38px]
                font-black
                tracking-[-0.05em]
                ">
                  🧠 AI Insight
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
              ">

                <h3 className="
                text-[38px]
                font-black
                tracking-[-0.05em]
                ">
                  🚨 Diagnostics
                </h3>

                <div className="space-y-4 mt-7">

                  <div className="
                  bg-[#2d1117]
                  border border-[#ff7b72]/10
                  rounded-2xl
                  px-5 py-5
                  text-[#ff7b72]
                  text-[15px]
                  leading-7
                  ">

                    Significant drop detected on 2026-04-28

                  </div>


                  <div className="
                  bg-[#0f2419]
                  border border-[#3fb950]/10
                  rounded-2xl
                  px-5 py-5
                  text-[#3fb950]
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