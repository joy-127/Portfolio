import { useState, useEffect } from "react"
import {
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaBriefcase
} from "react-icons/fa"
import { motion } from "framer-motion"

const navItems = [
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "skills", label: "Skills", icon: <FaCode /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("about")
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY

      const sections = navItems.map((item) => document.getElementById(item.id))
      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section.id)
          }
        }
      })

      if (currentY > lastScrollY && currentY > 100) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }

      setLastScrollY(currentY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleNavClick = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
      setActive(id)
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_25px_rgba(168,85,247,0.4)]`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-3">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600"
        >
          Portfolio
        </motion.h1>

        <ul className="hidden md:flex gap-8 items-center text-white">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative group cursor-pointer"
              style={{ perspective: "800px" }}
            >
              <motion.button
                onClick={() => handleNavClick(item.id)}
                whileHover={{ rotateX: 10, rotateY: -10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-all duration-300 hover:text-purple-400 hover:bg-white/5 ${
                  active === item.id ? "text-purple-400 bg-white/10" : ""
                }`}
              >
                {item.icon}
                {item.label}
              </motion.button>

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 ${
                  active === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        <div className="md:hidden text-white text-xl">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-purple-400 transition"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center gap-5 py-5 bg-black/90 backdrop-blur-lg text-white"
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 text-lg px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 ${
                  active === item.id ? "text-purple-400 bg-white/10" : ""
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  )
}