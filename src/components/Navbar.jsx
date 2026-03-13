import { Link } from "react-scroll"
import { FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa"


const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-6 fixed top-0 z-20 bg-black/30 backdrop-blur-lg">

 <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 animate-gradient-x">
  Portfolio
</h1>



      <ul className="flex gap-8">

<li>
<a href="#about" className="flex items-center gap-2 hover:text-purple-400">
<FaUser />
About
</a>
</li>

<li>
<a href="#skills" className="flex items-center gap-2 hover:text-purple-400">
<FaCode />
Skills
</a>
</li>

<li>
<a href="#projects" className="flex items-center gap-2 hover:text-purple-400">
<FaProjectDiagram />
Projects
</a>
</li>

<li>
<a href="#contact" className="flex items-center gap-2 hover:text-purple-400">
<FaEnvelope />
Contact
</a>
</li>

</ul>


    </nav>
  )
}

export default Navbar
