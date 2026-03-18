import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import CountUp from "react-countup"
import { Typewriter } from "react-simple-typewriter"
import profileImg from "../assets/pro.jpg";


const techSkills = [
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Power BI", src: "https://cdn.worldvectorlogo.com/logos/power-bi.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
]

const About = () => {
  return (
    <section id="about" className="py-28 px-6 flex justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">

      {/* Floating Glows */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full top-10 left-0" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 90, repeat: Infinity, ease: "linear" }} className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full bottom-20 right-0" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">

        {/* Profile Image Slide-In */}
       <motion.div
  initial={{ x: -300, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 70, damping: 20, duration: 1 }}
  className="flex justify-center items-center"
>
  <Tilt
    tiltMaxAngleX={25}
    tiltMaxAngleY={25}
    scale={1.1}
    glareEnable={true}
    glareMaxOpacity={0.3}
    glareColor="#ffffff"
    glarePosition="all"
  >
    <motion.div
      whileHover={{ scale: 1.08, rotate: 3 }}
      className="p-[3px] rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-2xl"
    >
      {/* 👇 UPDATED IMAGE */}
      <motion.img
        src={profileImg}
        alt="profile"
        animate={{ y: [0, -10, 0] }}   // floating effect
        transition={{ duration: 3, repeat: Infinity }}
        className="w-64 h-64 md:w-72 md:h-72 rounded-3xl object-cover grayscale hover:grayscale-0 transition duration-500"
      />
    </motion.div>
  </Tilt>
</motion.div>


        {/* About Content */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            About Me
          </h2>

          <h3 className="text-xl md:text-2xl text-purple-300 mb-4 font-semibold">
            I'm a <span className="ml-2 text-pink-400">
              <Typewriter words={["Data Analyst","Web Developer","IT Enthusiast",]} loop cursor cursorStyle="|" typeSpeed={80} deleteSpeed={50} delaySpeed={1500} />
            </span>
          </h3>

          <p className="text-gray-300 leading-relaxed mb-4">
            Hi, I'm <span className="text-purple-400 font-semibold">PremKumar</span>. I transform raw data into insights and build modern, interactive web applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            Skilled in Python, SQL, Power BI, and frontend development. I enjoy creating immersive UI/UX experiences that captivate users.
          </p>

          {/* Animated Tech Skills with Staggered Slide-In */}
          <div className="flex gap-4 flex-wrap mt-6">
            {techSkills.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.6, ease: "easeOut" }}
              >
                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} glareEnable={true} glareMaxOpacity={0.25} glareColor="#ffffff" glarePosition="all">
                  <motion.div whileHover={{ y: -8 }} className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4 flex items-center justify-center transition shadow-md">
                    <img src={tech.src} alt={tech.name} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                  </motion.div>
                </Tilt>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[{ end: 4, label: "Projects" }, { end: 10, label: "Technologies" }].map((item,i)=>(
              <div key={i} className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-purple-400"><CountUp end={item.end} duration={2}/>+</h3>
                <p className="text-gray-400 text-sm md:text-base">{item.label}</p>
              </div>
            ))}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-400">Fresher</h3>
              <p className="text-gray-400 text-sm md:text-base">Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
