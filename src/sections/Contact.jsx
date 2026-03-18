import { useState, useRef } from "react";
import Tilt from "react-parallax-tilt";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_iohdmwj",
        "template_kgvs2id",
        formRef.current,
        "vQE9efL7n170qHMOq"
      )
      .then(
        () => {
          setSubmitted(true);
          setLoading(false);
        },
        () => {
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-gray-900 text-white overflow-hidden">

      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-center text-white">
        Let's Connect
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-6">
          <div
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition cursor-pointer"
            onClick={() => navigator.clipboard.writeText("satheeshprem175@gmail.com")}
          >
            <FaEnvelope className="text-purple-400 text-2xl" />
            <span className="hover:text-purple-400">satheeshprem175@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition">
            <FaPhone className="text-purple-400 text-2xl" />
            <span>+91 9790255290</span>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition">
            <FaMapMarkerAlt className="text-purple-400 text-2xl" />
            <span>Madurai, India</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
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
            </a>

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
            </a>
          </div>
        </div>

        {/* Contact Form (Upgraded Design Only) */}
        <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.03} transitionSpeed={2000}>
          <div className="bg-white/5 backdrop-blur-3xl p-8 rounded-3xl border border-white/10 shadow-2xl hover:shadow-purple-500/30 transition-shadow duration-500">
            {submitted ? (
              <p className="text-green-400 text-center text-xl font-semibold">
                ✅ Message Sent Successfully!
              </p>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    className="peer w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-transparent
                               focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 transition"
                    placeholder="Your Name"
                  />
                  <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all
                                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                                    peer-focus:top-1 peer-focus:text-xs peer-focus:text-purple-400">
                    Your Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    className="peer w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-transparent
                               focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 transition"
                    placeholder="Your Email"
                  />
                  <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all
                                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                                    peer-focus:top-1 peer-focus:text-xs peer-focus:text-purple-400">
                    Your Email
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="peer w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-transparent
                               focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 transition"
                    placeholder="Your Message"
                  ></textarea>
                  <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all
                                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                                    peer-focus:top-1 peer-focus:text-xs peer-focus:text-purple-400">
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl font-semibold text-white
                             bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                             hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
                             transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>
            )}
          </div>
        </Tilt>

      </div>
    </section>
  );
};

export default Contact;
