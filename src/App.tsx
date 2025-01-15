import Card from "./components/Card";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Card images
import LabelSystemImage from './assets/labelSystem.png';
import ComingSoonImage from './assets/ComingsoonImage.png';

const App: React.FC = () => {
  const cards = [
    {
      title: "Specimen Label System",
      description: "The system is create to help medical staff nusres and doctors create, update, print and past labels. This new system will assit the client with simpler and intuitive user friendly user interface. With the primary objective to improve patient care.",
      image: { src: LabelSystemImage, alt: 'Screenshot of the Specimen Label System' }
    },
    {
      title: "Weather Application",
      description: "To help user find local weather updates within their geogpahical area.",
      image: { src: ComingSoonImage, alt: 'Screenshot of the coming soon project image' }
    },
    {
      title: "Shopping List Application",
      description: "To provide a shopping list for customers to add items to throughout the week. This web application will assit with their weekly fruit and vegetables shopping.",
      image: { src: ComingSoonImage, alt: 'Screenshot of the coming soon project image' }
    },
  ];

  return (
    /** SPA page  h-full row gap-4 justify-center -mx-2**/
    <div className="bg-custom-background h-full">
      {/* Navbar*/}
      <Navbar />
      {/* About Me Section className="flex flex-col items-center justify-center h-screen"*/}
      <section id="about">
        <About />
      </section>

      {/* Cards  */}
      <section id="projects" className="flex flex-wrap justify-center px-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image} />
        ))}
      </section>
      {/* Footer  */}
      <section id="contact">
        <Footer />
      </section>


    </div>
  )
}

export default App;
