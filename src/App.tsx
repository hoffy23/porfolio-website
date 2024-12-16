import Card from "./components/Card";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Card images
import LabelSystemImage from './assets/labelSystem.png';
import ComingSoonImage from './assets/ComingsoonImage.png'; 

const App: React.FC = () => {
 
  return (
    /** SPA page  h-full**/
    <div className="row bg-custom-background h-full">
      {/* Navbar*/ }
      <Navbar />
      {/* About Me Section*/}
      <About />
      {/* Cards  */}
      <div className="flex flex-wrap gap-4 justify-center  ">
        <Card 
        title="Specimen Label System"
        description="The system is create to help medical staff nusres and doctors create, update, print and past labels.
        This new system will assit the client with simpler and intuitive user friendly user interface. With the primary objective to improve patient care."
        image={{ src: LabelSystemImage, alt: 'Screenshot of the Specimen Label System'}}
        />
        <Card 
        title="Weather Appilcaion"
        description="To help user find local weather updates within their geogpahical area."
        image={{ src: ComingSoonImage, alt: 'Screenshot of the coming soon project image'}}
        />
        <Card 
        title="Specimen Label System"
        description="The system is create to help medical staff nusres and doctors create, update, print and past labels.
        This new system will assit the client with simpler and intuitive user friendly user interface. With the primary objective to improve patient care."
        image={{ src: ComingSoonImage, alt: 'Screenshot of the coming soon project image'}}
        />
      </div>
      
      {/* Footer  */}
      <Footer  />
      
    </div>
  )
}

export default App;
