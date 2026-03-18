import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"

const skills = [
  { name: "HTML", emoji: "🌐" },
  { name: "CSS", emoji: "🎨" },
  { name: "JavaScript", emoji: "🟨" },
  { name: "SQL", emoji: "🗄️" },
  { name: "Python", emoji: "🐍" },
  { name: "React", emoji: "⚛️" },
  { name: "Tailwind", emoji: "💨" },
  { name: "MongoDB", emoji: "🍃" },
]

const tools = [
  { name: "Git", emoji: "🔧" },
  { name: "GitHub", emoji: "🐙" },
  { name: "Power BI", emoji: "📊" },
  { name: "Excel", emoji: "📈" },
  { name: "Vercel", emoji: "🚀" },
  { name: "Cloud", emoji: "☁️" },
  { name: "Networking", emoji: "🔗" },
]

const Card = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.15}
      scale={1.03}
      transitionSpeed={2000}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="rounded-2xl"
    >
      <div className="group">
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700">
          <div className="relative bg-black/70 backdrop-blur-2xl rounded-2xl p-6 flex flex-col items-center justify-center shadow-2xl border border-white/5 overflow-hidden">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-white/5 via-transparent to-white/5 blur-2xl" />

            <span className="text-4xl mb-3 group-hover:scale-110 transition duration-500 z-10">
              {item.emoji}
            </span>

            <p className="text-sm md:text-base text-gray-200 z-10 font-light tracking-wide">
              {item.name}
            </p>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-20" />
          </div>
        </div>
      </div>
    </Tilt>
  </motion.div>
)

const Heading = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex flex-col items-center mb-6"
  >
    <h3 className="text-xs md:text-sm text-gray-500 tracking-[0.3em] uppercase font-light">
      {title}
    </h3>

    <motion.span
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "2.5rem", opacity: 0.6 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="h-[1px] bg-gray-500 mt-2"
    />
  </motion.div>
)

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 text-center relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05),transparent_40%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_40%)]" />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold mb-12 text-white tracking-tight"
      >
        Skills & Tools
      </motion.h2>

      <div className="max-w-6xl mx-auto mb-14">
        <Heading title="Tech Stack" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} item={skill} index={index} />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <Heading title="Tools & Platforms" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} item={tool} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
