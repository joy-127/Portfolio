import Tilt from "react-parallax-tilt"
import { FaBookmark, FaFileAlt, FaFolderOpen } from "react-icons/fa"

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern developer portfolio built with React",
    icon: <FaFolderOpen size={40} className="text-cyan-400" />
  },
  {
    title: "Bookmark Storage",
    desc: "Users can save/bookmark projects",
    icon: <FaBookmark size={40} className="text-yellow-400" />
  },
  {
    title: "Doc-Genie",
    desc: "Document processing solution using AI",
    icon: <FaFileAlt size={40} className="text-green-400" />
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-900 text-white">

     <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
 Projects
</h2>

      <div className="grid md:grid-cols-3 gap-10">

        {projects.map((project, index) => (
          <Tilt
            key={index}
            glareEnable={true}
            glareMaxOpacity={0.4}
            scale={1.05}
            transitionSpeed={2500}
          >
            <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 
                            backdrop-blur-md p-10 rounded-3xl border border-white/20 
                            hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer
                            flex flex-col items-center justify-center text-center">

              {/* Project Icon */}
              <div className="flex justify-center mb-6 animate-bounce">
                {project.icon}
              </div>

              {/* Project Title */}
              <h3 className="text-3xl font-bold mb-3">{project.title}</h3>

              {/* Project Description */}
              <p className="text-gray-300 text-lg">{project.desc}</p>

              {/* Optional: subtle animated background circles */}
              <span className="absolute top-[-20px] left-[-20px] w-20 h-20 bg-purple-500/20 rounded-full blur-3xl"></span>
              <span className="absolute bottom-[-20px] right-[-20px] w-24 h-24 bg-pink-500/20 rounded-full blur-3xl"></span>

            </div>
          </Tilt>
        ))}

      </div>

    </section>
  )
}

export default Projects
