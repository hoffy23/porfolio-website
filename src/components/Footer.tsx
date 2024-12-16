import React from 'react'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
  
    return (
    <footer className="text-black-700 py-4">
        <p className="text-center">&copy; {currentYear} Mendel Hoffman. All right reserved.</p>
    </footer>
)
}

export default Footer;