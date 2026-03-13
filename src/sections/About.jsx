import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-24 px-6 flex justify-center">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 grid md:grid-cols-2 gap-10 shadow-xl"
      >

        {/* Profile Image */}
        <div className="flex justify-center items-center">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://wallpaperaccess.com/full/2887276.jpg"


            alt="profile"
            className="w-60 h-60 rounded-2xl object-cover shadow-2xl border border-white/20"
          />
        </div>

        {/* About Content */}
        <div>

 <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
  About Me
</h2>



          <p className="text-gray-300 leading-relaxed mb-4">
            Hi, I'm <span className="text-purple-400 font-semibold">Prem Kumar</span>,
            an aspiring <span className="text-purple-400">Data Analyst and IT Enthusiast</span>.
            I am passionate about technology and enjoy discovering how data
            can be transformed into meaningful insights.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I love exploring data, learning modern technologies, and building
            digital solutions that solve real-world problems. My interests
            include data analytics, web development, and emerging IT tools
            that help organizations make smarter decisions.
          </p>

          {/* Highlight cards */}
          <div className="flex gap-6 mt-8 flex-wrap">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-center"
            >
              <h3 className="text-2xl font-bold text-purple-400">📊</h3>
              <p className="text-gray-400 text-sm mt-1">Data Analytics</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-center"
            >
              <h3 className="text-2xl font-bold text-purple-400">💻</h3>
              <p className="text-gray-400 text-sm mt-1">IT Enthusiast</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-center"
            >
              <h3 className="text-2xl font-bold text-purple-400">🚀</h3>
              <p className="text-gray-400 text-sm mt-1">Tech Learner</p>
            </motion.div>

          </div>

        </div>

      </motion.div>

    </section>
  )
}

export default About
