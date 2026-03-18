import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center px-6 py-20 lg:py-0 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Gradient Orbs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        className="absolute top-0 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600 to-teal-400 blur-[120px] rounded-full opacity-30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
        className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-pink-500 to-blue-500 blur-[140px] rounded-full opacity-20"
      />

      {/* Optional floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, 10, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 6 + 4,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-teal-400">
              PremKumar
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            A passionate <span className="text-white font-medium">Data Analyst</span> crafting
            meaningful insights through high-performance digital solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row flex-wrap gap-4 pt-4">
            {/* Download Resume */}
            <a href="/resume.pdf" target="_blank" download>
              <button className="relative px-8 py-3 rounded-full font-semibold text-white backdrop-blur-sm bg-white/10 border border-white/20 overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]">
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></span>
                <span className="relative flex items-center gap-2">📄 Download Resume</span>
              </button>
            </a>

            {/* Explore Projects */}
      


            {/* Contact Me */}
          
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative justify-self-center lg:justify-self-end"
        >
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.3} className="relative">
            {/* Profile Card */}
            <div className="relative w-[320px] md:w-[400px] aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-2xl shadow-2xl group-hover:scale-[1.03] transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img
                src="/profile.png"
                alt="PremKumar"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />

              {/* Info */}
              <div className="absolute top-8 w-full text-center z-20">
                <h3 className="text-3xl font-bold text-white tracking-wide"></h3>
                <p className="text-teal-400 text-sm font-medium uppercase tracking-widest mt-1">
                 
                </p>
              </div>

              {/* Bottom Contact Bar */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl z-20 flex justify-between items-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Status */}
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] uppercase">Status</span>
                  <span className="text-white text-xs flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                    Available for work
                  </span>
                </div>

                {/* Contact Me Button */}
                <a href="#contact" className="relative">
                  <button className="relative px-4 py-2 bg-white/90 text-black font-semibold rounded-full overflow-hidden group hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition-all duration-300">
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-teal-400 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></span>
                    <span className="relative text-sm">Contact Me</span>
                  </button>
                </a>
              </div>

              {/* Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-purple-500/20 to-pink-500/20 rounded-[2.1rem] blur-xl -z-10 group-hover:opacity-100 transition-opacity opacity-50" />
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
