import GradientText from "@/components/GradientText";
import IconWrapper from "@/components/wrappers/IconWrapper";
import LinkButton from "@/components/buttons/LinkButton";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import { SpotlightBackground } from "@/components/background/SpotlightPreview";
import { File, Github, Linkedin, Mails } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (  
      <div className="h-screen flex-col box-border overflow-y-auto">
       <SpotlightBackground>
          <HeroContent/>
          <div>

          </div>
        </SpotlightBackground>
      </div>
  );
}

function HeroContent() {
  return (
    <>
      <div className="relative w-full pt-20 md:pt-0 justify-start">
        <div className="flex justify-between items-center w-full">
          <div>
            <GradientText text={"Hi, I'm Akshit."} />
            <div className="p-1">
              <p className="my-2 max-w-lg text-xl font-mono font-normal text-neutral-300">
                20. Full stack mind. Rishikesh soul.
              </p>
              <LinkBar/>                  
            </div>
          </div>
          <div className="p-1 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-md">
            <Image 
              src={'/images/sukuna.jpg'}
              width={200}
              height={200}
              className="rounded-lg aspect-square object-cover"
              alt={'pfp'} />
          </div>
        </div>
      </div>
      <div className="relative mt-4">
              <div className="flex gap-2 items-center">
                <GradientText text={"Hustling in Code, Healing in Hip-Hop ❤️"} className={"text-2xl md:text-3xl"} />
              </div>
              <SpotifyPlayer/>
      </div>
    </>
  )
}
function LinkBar() {
  return (
    <div className="flex flex-wrap space-x-3">
      <Link
        href="https://linkedin.com/in/akshit-padha-910a531ba/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <IconWrapper>
          <Linkedin color="white" />
        </IconWrapper>
        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/10 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          LinkedIn
        </span>
      </Link>

      <Link
        href="https://github.com/vaxxnsh"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <IconWrapper>
          <Github color="white" />
        </IconWrapper>
        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/10 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          GitHub
        </span>
      </Link>

      <Link href="mailto:kakshit817@gmail.com" className="group relative">
        <IconWrapper>
          <Mails color="white" />
        </IconWrapper>
        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/10 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Mail
        </span>
      </Link>

      <Link 
        target="_blank"
        href="https://drive.google.com/file/d/1B4g8IEQ_E-_x9cmlIYHVe6whlaDKhuOL/view" 
        className="group relative"
      >
        <IconWrapper>
          <File color="white" />
        </IconWrapper>
        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/10 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Resume
        </span>
      </Link>
    </div>
  )
}
