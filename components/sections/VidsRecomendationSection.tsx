'use client'

import { FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import { videos } from '@/lib/constants'
import IconWrapper from '../wrappers/IconWrapper'
import GradientText from '../GradientText'

export default function VideoRecommendations() {
  return (
    <section className="w-full relative py-16 px-4 md:px-8 lg:px-16">
   
        <GradientText 
            text='YouTube Recs Worth Your Time' 
            className="text-3xl md:text-4xl font-bold text-center text-white mb-8"
        />

      <div className="flex flex-col gap-4 max-w-3xl mx-auto">
        {videos.map((video, i) => (
          <IconWrapper
            key={i}
            className='p-1'
          >
            <Link       
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300 rounded-xl p-4"
            >
            <FaYoutube className="text-red-500 text-3xl shrink-0" />
            <span className="text-white font-medium text-base leading-tight">
              {video.title}
            </span>
          </Link>
          </IconWrapper>
        ))}
      </div>
    </section>
  )
}
