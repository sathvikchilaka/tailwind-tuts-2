import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechnologiesSection from "./components/TechnologiesSection";
import ProjectsSection from "./components/ProjectsSection";
import WorkExperienceSection from "./components/WorkExperienceSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="content-wrap">
      <div className="absolute overflow-x-hidden antialiased text-stone-300 w-full">
        <div className="container mx-auto px-8">
          <Navbar />
          <HeroSection/>
          <TechnologiesSection/>
          <ProjectsSection />
          <WorkExperienceSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default App;
