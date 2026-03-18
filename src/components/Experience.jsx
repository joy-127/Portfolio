import { motion } from "framer-motion"
import { FaBriefcase } from "react-icons/fa"

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-950 text-white">

      {/* Updated Title */}
     <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-center text-white">
        Internship Experience
      </h2>


      <div className="max-w-4xl mx-auto relative">

        {/* Vertical Line */}
        <div className="absolute left-4 top-0 w-[2px] h-full bg-purple-500/40"></div>

        {/* Timeline Item */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative pl-12 mb-12"
        >

          {/* Icon */}
          <div className="absolute left-0 top-2 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
            <FaBriefcase className="text-white" />
          </div>

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg
                          hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300">

            <h3 className="text-2xl font-semibold">
              Machine Learning Intern
            </h3>

            <p className="text-purple-400 mt-1">
              Reccar Pvt Ltd, Madurai
            </p>

            <p className="text-gray-400 text-sm mb-3">
              26 May 2025 – 14 June 2025
            </p>

            <p className="text-gray-300 leading-relaxed">
              Worked on machine learning concepts including data preprocessing,
              model training, and evaluation. Used Python libraries such as
              Pandas, NumPy, and Scikit-learn for data analysis and model
              development. Gained hands-on experience in solving real-world
              data problems and data visualization.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Experience
