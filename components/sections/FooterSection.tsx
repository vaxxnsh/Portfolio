import { Mail, Calendar, Github, Twitter } from 'lucide-react';
import ShinyText from '../ui/TextAnimations/ShinyText/ShinyText';

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
      
      {/* Footer content */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between text-sm text-white/80">
        {/* Name */}
        
          <ShinyText 
            text='vaxxnsh'
            speed={10}
          />
        

        {/* Social icons */}
        <div className="flex gap-6">
          <a href="https://twitter.com/vaxxnsh" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-4 h-4 hover:text-white transition-colors" />
          </a>
          <a href="https://cal.com/vaxxnsh" target="_blank" rel="noopener noreferrer">
            <Calendar className="w-4 h-4 hover:text-white transition-colors" />
          </a>
          <a href="mailto:kakshit817@gmail.com">
            <Mail className="w-4 h-4 hover:text-white transition-colors" />
          </a>
          <a href="https://github.com/vaxxnsh" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
