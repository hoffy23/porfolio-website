import React from 'react'

// import icons Linkedin and Github
import IconLinkedin from '/linkedin.svg';
import IconGithub from '/github.svg'
import IconEmail from '/mail.svg'
const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-black-700 py-4">
            <div className="container mx-auto px-4 text-center" >
                {/* Social media icons */}
                <div className="flex justify-center space-x-6 mb-4">
                    <h4 className="text-lg font-semibold">Get In Touch:</h4>
                </div>
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://www.linkedin.com/in/menachemhoffman/" target="_blank" rel="noopener noreferrer">
                        <img src={IconLinkedin} alt="Linkedin" className="w-8 h-8" />
                    </a>
                    <a href="https://www.github.com/hoffy23/" target="_blank" rel="noopener noreferrer" >
                        <img src={IconGithub} alt="Github" className="w-8 h-8" />
                    </a>
                    <a href="mailto:mendel@mendelhoffman.com?subject=Inquiry from Portfolio Website">
                        <img src={IconEmail} alt="Email" className="w-8 h-8" />
                    </a>
                </div>
                <p className="text-center">&copy; {currentYear} Mendel Hoffman. All right reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;