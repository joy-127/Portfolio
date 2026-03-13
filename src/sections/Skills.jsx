const skills = [
  { name: "HTML", emoji: "🌐" },
  { name: "CSS", emoji: "🎨" },
  { name: "SQL", emoji: "🗄️" },
  { name: "Python (Basic)", emoji: "🐍" },
  { name: "Excel", emoji: "📊" },
  { name: "Cloud", emoji: "☁️" },
  { name: "Networking", emoji: "🔗" },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-center">

     <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
  Tech Stack's
</h2>


      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 max-w-6xl mx-auto">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 
                       backdrop-blur-md border border-white/20 p-6 rounded-3xl text-white 
                       font-semibold hover:scale-105 hover:shadow-xl transition-all duration-500 cursor-default flex flex-col items-center justify-center"
          >
            <span className="text-4xl mb-2">{skill.emoji}</span>
            {skill.name}
          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills
