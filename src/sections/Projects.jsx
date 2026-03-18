import { useState, useEffect } from "react"
import Tilt from "react-parallax-tilt"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub } from "react-icons/fa"

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern developer portfolio built with React & Tailwind",
    github: "https://github.com/joy-127/portfolio-site",
    tech: ["React", "Tailwind", "Framer Motion"],
    details: "A fully responsive, visually engaging developer portfolio designed with modern UI principles, incorporating smooth animations, interactive 3D effects, and dynamic components. Showcases my projects, technical skills, and professional experience in a polished and immersive way, highlighting creativity, attention to detail, and front-end development expertise."
  },
  {
    title: "Bookmark Storage",
    desc: "Users can save and manage bookmarked projects",
    github: "#",
    tech: ["React", "Node.js", "MongoDB"],
    details:"A full-stack bookmark manager application that allows users to securely save, organize, and manage their favorite links. Features include user authentication, intuitive categorization, and a clean, responsive interface, providing a seamless and personalized experience for efficiently managing web resources."
  },
  {
    title: "Doc-Genie",
    desc: "AI-powered document processing solution",
    github: "https://github.com/joy-127/Doc_Genie",
    tech: ["Python", "Flask", "AI"],
    details: "An intelligent document processing system that leverages AI models to extract, analyze, and process text from various document formats. Features include automated data extraction, contextual understanding, and efficient information processing, enabling faster decision-making and streamlined workflows."
  },
  {
    title: "Netflix Data Analysis",
    desc: "Analyzed Netflix Movies & TV Shows dataset using Python",
    github: "https://github.com/joy-127/netflix-data-analysis",
    tech: ["Python", "Pandas", "Power BI"],
    details: "Performed comprehensive data cleaning, exploratory data analysis (EDA), and advanced data visualization to uncover key trends and patterns. Developed an interactive Power BI dashboard to present insights effectively, enabling data-driven decision-making and actionable business recommendations."
  }
]

const Projects = () => {
  const [selected, setSelected] = useState(null)
  const [stats, setStats] = useState({})

  useEffect(() => {
    projects.forEach(async (project) => {
      try {
        const repo = project.github.includes("github.com")
          ? project.github.split("github.com/")[1]
          : null

        if (!repo) return

        const res = await fetch(`https://api.github.com/repos/${repo}`)
        const data = await res.json()

        setStats(prev => ({
          ...prev,
          [project.title]: data.stargazers_count
        }))
      } catch (err) {
        console.log(err)
      }
    })
  }, [])

  return (
    <section className="py-24 bg-gray-950 text-white px-6 relative">

      {/* Centered White Heading */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Projects
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.6 }}
          className="h-[3px] bg-white/40 mt-3 mx-auto rounded"
        />
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.06, rotateY: 6 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Tilt glareEnable glareMaxOpacity={0.2} scale={1.02}>
              <div
                onClick={() => setSelected(p)}
                className="cursor-pointer p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
                hover:border-pink-500 hover:shadow-pink-500/30 hover:shadow-2xl 
                transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-400 transition">
                  {p.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-yellow-400">
                 
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.7 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl max-w-lg w-full relative border border-white/10 shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg"
              >
                ✖
              </button>

              <h3 className="text-2xl font-bold mb-4 text-pink-400">
                {selected.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {selected.details}
              </p>

              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 px-5 py-2 rounded-full hover:bg-pink-500 transition-all"
              >
                <FaGithub /> View Code
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

export default Projects
