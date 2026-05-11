function App() {

  return (

    <div className="min-h-screen bg-[#070b14] text-[#f0f6fc] flex overflow-hidden">

      {/* SIDEBAR */}

      <aside className="
      w-[250px]
      min-h-screen
      bg-[#0b1020]/95
      border-r border-white/5
      px-7 py-10
      flex flex-col
      justify-between
      backdrop-blur-xl
      ">

        <div>

          <h1 className="text-5xl font-black tracking-[-0.06em] leading-none">
            BAM
          </h1>

          <p className="text-[#8b949e] text-sm mt-3 leading-6">
            Behaviour Intelligence
          </p>

          <div className="mt-16">

            <p className="
            text-[11px]
            uppercase
            tracking-[0.28em]
            text-[#6e7681]
            mb-7
            font-semibold
            ">
              Navigation
            </p>

            <div className="space-y-5 text-[16px]">

              <div className="text-white font-medium cursor-pointer">
                Dashboard
              </div>

              <div className="text-[#8b949e] hover:text-white transition">
                Timeline
              </div>

              <div className="text-[#8b949e] hover:text-white transition">
                Heatmap
              </div>

              <div className="text-[#8b949e] hover:text-white transition">
                Insights
              </div>

              <div className="text-[#8b949e] hover:text-white transition">
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

        <div className="max-w-[1400px] mx-auto px-16 py-14">


          {/* HERO */}

          <section className="max-w-[950px]">

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
            text-[120px]
            font-black
            tracking-[-0.08em]
            leading-[0.9]
            mt-4
            ">
              BAM
            </h1>


            <div className="flex items-center gap-4 mt-6">

              <span className="text-5xl">
                ⚡
              </span>

              <h2 className="
              text-[64px]
              font-bold
              tracking-[-0.05em]
              text-[#58a6ff]
              ">
                Burst Coder
              </h2>

            </div>


            <p className="
            text-[#8b949e]
            text-[24px]
            leading-[1.8]
            mt-10
            max-w-[920px]
            ">

              Analyze coding behavior, productivity rhythms,
              contribution intensity, and development momentum
              through GitHub activity intelligence.

            </p>

          </section>



          {/* METRICS */}

          <section className="
          grid
          grid-cols-3
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
            ">

              <p className="text-[#8b949e] text-sm">
                Highest Streak
              </p>

              <h2 className="
              text-[64px]
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
            ">

              <p className="text-[#8b949e] text-sm">
                Consistency
              </p>

              <h2 className="
              text-[64px]
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
            ">

              <p className="text-[#8b949e] text-sm">
                Peak Time
              </p>

              <h2 className="
              text-[54px]
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
            min-h-[650px]
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
              rounded-[32px]
              p-8
              backdrop-blur-xl
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