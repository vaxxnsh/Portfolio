"use client"

import { useState } from "react"
import { ExternalLink, Github, ArrowUpRight, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import GradientText from "../GradientText"
import CardWrapper from "../wrappers/CardWrapper"
import { projects } from "@/lib/constants"
import Link from "next/link"

export default function PortfolioProjects() {
  const tabs = ["My Works", "Client Works"];
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div className="min-h-screen relative bg-transparent text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header with tabs */}
        
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
             
            <div className="flex  backdrop-blur-sm rounded-lg p-1">
              <CardWrapper className="inline-flex">
              {tabs.map((tab,index) => (
                <button
                  key={tab+index}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-black/60 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
               </CardWrapper>
            </div>
              
          </div>
       
          <GradientText 
            text="My Featured Projects" 
            className={`text-4xl md:text-5xl font-bold mb-6`} 
          />

          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            I've worked on a range of projects — from simple websites to full-stack applications and mobile apps. Here are a few highlights. You can explore more on my{" "}
            <Link href="/projects" className="text-blue-400 hover:text-blue-300 transition-colors">
              projects page
            </Link>
            .
          </p>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {(activeTab === tabs[0] ? projects.filter((p) => !p.isClient) : projects.filter((p) => p.isClient)).slice(0,4).map((project) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
            <CardWrapper>
              <div className="group relative bg-[#111111] backdrop-blur-sm border border-gray-800/40 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-700/60">
                
                {/* Project Image/Preview */}
                <div className="relative h-48 bg-black overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  

                </div>

                {/* Project Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-medium text-white">{project.title}</h3>
                      
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      {
                        project.github && 
                        <Link 
                        href={project.github} 
                        target="_blanck"
                        className="p-1.5 text-gray-500 hover:text-white transition-colors duration-200 hover:bg-gray-800/50 rounded">
                        <Github className="w-4 h-4" />
                      </Link>
                      }
                     {
                        project.live && 
                        <Link 
                          href={project.live}
                          target="_blank"
                          className="p-1.5 text-gray-500 hover:text-white transition-colors duration-200 hover:bg-gray-800/50 rounded">
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                     }
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                  {/* Tech Stack - minimal */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs text-gray-400 bg-black/15 rounded border border-gray-800/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardWrapper>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
            <div className="relative inline-block">
              <CardWrapper className={'px-1 py-1 rounded-md'}>
                <Link 
                  href={'/projects'}
                  className="flex p-0"
                >
                  <button
                    className="bg-black/50 flex items-center justify-center backdrop-blur-sm border border-white/5 text-white hover:bg-black/70 hover:border-white/15 transition-all duration-300 px-4 py-2"
                  >
                    View All Projects
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </button>
                </Link>
              </CardWrapper>
            </div>
        </div>
      </div>
    </div>
  )
}
