import { SpotlightBackground } from "@/components/background/SpotlightPreview";
import PortfolioProjects from "@/components/sections/ProjectSection";
import ClickSpark from "@/components/ui/Animations/ClickSpark/ClickSpark";
import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";


export default function Home() {
  return (
   
      <div className="flex-col relative box-border">
        <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
          
        >
          <div className="min-h-screen relative">
            <SpotlightBackground>
              <HeroSection/>
              <ExperienceSection/>
              <PortfolioProjects />
            </SpotlightBackground>
          </div>
        </ClickSpark>
      </div>
  
  );
}


