import { SpotlightBackground } from "@/components/background/SpotlightPreview";
import PortfolioProjects from "@/components/sections/ProjectSection";
import ClickSpark from "@/components/ui/Animations/ClickSpark/ClickSpark";
import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Footer from "@/components/sections/FooterSection";
import VideoSection from "@/components/sections/VidsRecomendationSection";
import BentoGrid from "@/components/sections/PhotoGridSection";



export default function Home() {
  return (
   
      <div className="flex-col relative box-border overflow-hidden">
        <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
         
          <div className="min-h-screen relative">
            <SpotlightBackground>
              <PortfolioProjects 
                showAll
              />
              <Footer/>
            </SpotlightBackground>
          </div>
        </ClickSpark>
      </div>
  
  );
}


