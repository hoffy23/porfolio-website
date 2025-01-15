import React from 'react';
import { Link } from 'react-scroll';


const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center py-8 ">
      <ul className="group flex gap-8 justify-center border-4 px-2
       border-transparent hover:border-l-beige rounded-full">
        <li className="text-black-700 text-xl font-medium">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-700 border-gray-400">
            About
          </Link>
        </li>
        <li className="text-black-700 text-xl font-medium">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-700 border-gray-400">
            Projects
          </Link>
        </li>
        <li className="text-black-700 text-xl font-medium">
          <Link
            to="blog"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-700 border-gray-400">
            Blog
          </Link>
        </li>
        <li className="text-black-700 text-xl font-medium">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-700 border-gray-400">
            Contact
          </Link>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar;