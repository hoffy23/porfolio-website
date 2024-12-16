import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center py-8 ">
      <ul className="group flex gap-8 justify-center border-4 px-2
       border-transparent hover:border-l-beige rounded-full">
            <li className="text-black-700 text-xl font-medium hover:text-gray-700 border-gray-400">About</li>
            <li className="text-black-700 text-xl font-medium hover:text-gray-700 border-gray-400">Projects</li>
            <li className="text-balck-700 text-xl font-medium hover:text-gray-700 border-gray-400">Blog</li>
            <li className="text-black-700 text-xl font-medium hover:text-gray-700 border-gray-400">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar;