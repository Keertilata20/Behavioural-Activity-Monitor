function Heatmap({ timeline }) {

  return (

    <div className="grid grid-rows-7 grid-flow-col gap-2">

      {timeline.map((day, index) => {

        let intensity = "bg-[#0f172a]"

        if (day.count >= 1) {
          intensity = "bg-blue-900"
        }

        if (day.count >= 3) {
          intensity = "bg-blue-700"
        }

        if (day.count >= 5) {
          intensity = "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
        }

        return (

          <div
            key={index}
            title={`${day.date} : ${day.count} contributions`}
            className={`
              w-4
              h-4
              rounded-md
              transition-all
              duration-300
              hover:scale-110
              ${intensity}
            `}
          />

        )

      })}

    </div>

  )

}

export default Heatmap