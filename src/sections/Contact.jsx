import { useState, useRef } from "react"
import Tilt from "react-parallax-tilt"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_iohdmwj",   // replace with your Service ID
        "template_kgvs2id",  // replace with your Template ID
        formRef.current,
        "vQE9efL7n170qHMOq"    // replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text)
          setSubmitted(true) // show thank you message
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section id="contact" className="relative py-24 px-6 bg-gray-900 text-white overflow-hidden">
   <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
  Let's Connect
</h2>


      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-purple-400 text-2xl" />
            <span>satheeshprem175@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-purple-400 text-2xl" />
            <span>+91 9790255290</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-purple-400 text-2xl" />
            <span>Madurai, India</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6 justify-start md:justify-start">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/premkumar-it"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-14 h-14 flex items-center justify-center rounded-full
                         bg-gradient-to-tr from-blue-500 to-blue-700 text-white shadow-lg
                         transition-transform duration-300 hover:scale-110 hover:-translate-y-2
                         after:absolute after:w-full after:h-full after:rounded-full after:opacity-0
                         after:blur-xl after:bg-blue-400 after:animate-pulse group-hover:after:opacity-50"
            >
              <FaLinkedin size={28} />
              <span className="absolute bottom-[-28px] opacity-0 group-hover:opacity-100
                               text-white text-sm bg-gray-900/80 px-2 py-1 rounded-md
                               transition-all duration-300">
                LinkedIn
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/joy-127"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-14 h-14 flex items-center justify-center rounded-full
                         bg-gradient-to-tr from-gray-700 to-gray-900 text-white shadow-lg
                         transition-transform duration-300 hover:scale-110 hover:-translate-y-2
                         after:absolute after:w-full after:h-full after:rounded-full after:opacity-0
                         after:blur-xl after:bg-gray-400 after:animate-pulse group-hover:after:opacity-50"
            >
              <FaGithub size={28} />
              <span className="absolute bottom-[-28px] opacity-0 group-hover:opacity-100
                               text-white text-sm bg-gray-900/80 px-2 py-1 rounded-md
                               transition-all duration-300">
                GitHub
              </span>
            </a>
          </div>
        </div> {/* <-- closes Contact Info */}

        {/* Contact Form with Tilt effect */}
        <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02} transitionSpeed={2500}>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-lg">
            {submitted ? (
              <p className="text-green-400 text-center text-xl font-semibold animate-pulse">
                🙌 Thank you for reaching out! I will get back to you soon.
              </p>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-semibold
                             hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </Tilt>

      </div> {/* closes grid */}
    </section>
  )
}

export default Contact
