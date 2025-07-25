import Image from "next/image"
import GradientText from "../GradientText"
import SpotifyPlayer from "../SpotifyPlayer"
import CardWrapper from "../wrappers/CardWrapper"
import Link from "next/link"
import IconWrapper from "../wrappers/IconWrapper"
import { File, Github, Linkedin, Mails,} from "lucide-react"
import { raleway } from "@/lib/font"

export default function HeroSection() {
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

      <div className="relative mt-8 flex-col flex-wrap max-w-4xl"> 
          <CardWrapper>
            <div className="relative z-50 rounded-xl w-full overflow-hidden">
              <div className="backdrop-blur-xl rounded-xl p-3 shadow-2xl border border-white/5">
                <div className="mb-">
                  <GradientText text={"About Me"} className={"text-2xl md:text-4xl"} />
                  <div className="w-full h-px bg-white/10 my-2"></div>
                </div>
                <p className={`text-neutral-100 leading-relaxed ${raleway.className}`}>
                  Full-stack engineer crafting clean, scalable solutions from frontend to backend. 
                  I build with purpose — focusing on code quality, performance, and user impact. 
                  Always curious, always learning, always delivering.
                </p>
              </div>
            </div>
            </CardWrapper>
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
      
      <Link
        href="https://leetcode.com/u/vaxxnsh/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <IconWrapper className='pt-2'>
            <span className="text-white font-bold">LC</span>
        </IconWrapper>
        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/10 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Leetcode
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
        href="https://drive.google.com/file/d/1rxWJ0_qwXJUo_ViIfq11ANIdEMdjc_I9/view" 
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