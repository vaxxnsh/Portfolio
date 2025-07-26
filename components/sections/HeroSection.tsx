import Image from "next/image";
import GradientText from "../GradientText";
import SpotifyPlayer from "../SpotifyPlayer";
import CardWrapper from "../wrappers/CardWrapper";
import Link from "next/link";
import IconWrapper from "../wrappers/IconWrapper";
import { File, Github, Linkedin, Mails } from "lucide-react";
import { raleway } from "@/lib/font";

export default function HeroSection() {
  return (
    <>
      <div className="relative w-full pt-20 md:pt-0 px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <GradientText text={"Hi, I'm Akshit."} />
            <div className="p-1">
              <p className="my-2 max-w-lg text-xl font-mono font-normal text-neutral-300 mx-auto md:mx-0">
                20. Full stack mind. Rishikesh soul.
              </p>
              <LinkBar />
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="p-1 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-md">
            <Image
              src={"/images/sukuna.jpg"}
              width={200}
              height={200}
              className="rounded-lg aspect-square object-cover"
              alt={"pfp"}
            />
          </div>
        </div>
      </div>

      {/* Tagline & Spotify */}
      <div className="relative mt-10 px-4 sm:px-8 text-center">
        <div className="flex flex-col gap-2 items-center">
          <GradientText
            text={"Hustling in Code, Healing in Hip-Hop ❤️"}
            className={"text-2xl md:text-3xl"}
          />
          <SpotifyPlayer />
        </div>
      </div>

      {/* About Me */}
      <div className="relative mt-10 flex-col flex-wrap max-w-4xl px-4 sm:px-8 mx-auto">
        <CardWrapper>
          <div className="relative z-50 rounded-xl w-full overflow-hidden">
            <div className="backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-white/5">
              <div className="mb-2">
                <GradientText
                  text={"About Me"}
                  className={"text-2xl md:text-4xl"}
                />
                <div className="w-full h-px bg-white/10 my-2"></div>
              </div>
              <p className={`text-neutral-100 leading-relaxed ${raleway.className}`}>
                Full-stack engineer crafting clean, scalable solutions from
                frontend to backend. I build with purpose — focusing on code
                quality, performance, and user impact. Always curious, always
                learning, always delivering.
              </p>
            </div>
          </div>
        </CardWrapper>
      </div>
    </>
  );
}

function LinkBar() {
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
      <Link
        href="https://linkedin.com/in/akshit-padha-910a531ba/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <IconWrapper>
          <Linkedin color="white" />
        </IconWrapper>
        <Tooltip text="LinkedIn" />
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
        <Tooltip text="GitHub" />
      </Link>

      <Link
        href="https://leetcode.com/u/vaxxnsh/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <IconWrapper className="pt-2">
          <span className="text-white font-bold">LC</span>
        </IconWrapper>
        <Tooltip text="Leetcode" />
      </Link>

      <Link href="mailto:kakshit817@gmail.com" className="group relative">
        <IconWrapper>
          <Mails color="white" />
        </IconWrapper>
        <Tooltip text="Mail" />
      </Link>

      <Link
        target="_blank"
        href="https://drive.google.com/file/d/1rxWJ0_qwXJUo_ViIfq11ANIdEMdjc_I9/view"
        className="group relative"
      >
        <IconWrapper>
          <File color="white" />
        </IconWrapper>
        <Tooltip text="Resume" />
      </Link>
    </div>
  );
}

function Tooltip({ text }: { text: string }) {
  return (
    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/10 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
      {text}
    </span>
  );
}
