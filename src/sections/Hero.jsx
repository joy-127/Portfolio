import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen relative flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-gray-900"
    >

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 5 + 4,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold relative z-10"
      >
        Hi, I'm{" "}
        <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
          Prem Kumar
        </span>
      </motion.h1>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-xl md:text-2xl text-purple-400 z-10"
      >
        Aspiring Data Analyst & IT Enthusiast
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-6 text-gray-400 max-w-xl text-sm md:text-base z-10"
      >
        Passionate about data analytics, technology, and building modern
        digital solutions that transform data into meaningful insights.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-10 flex gap-6 z-10"
      >
        <a href="#projects">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg text-white font-semibold hover:scale-110 hover:shadow-pink-500/40 transition-all duration-300">
            View Projects
          </button>
        </a>

        <a href="#contact">
          <button className="px-8 py-3 border border-purple-500 rounded-xl text-white font-semibold hover:bg-purple-600 hover:scale-105 transition-all duration-300">
            Contact Me
          </button>
        </a>
      </motion.div>

      {/* Scroll Down Arrow */}
      <a href="#about">
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 text-white text-2xl cursor-pointer"
        >
          ⬇️
        </motion.div>
      </a>

    </section>
  )
}

export default Hero
