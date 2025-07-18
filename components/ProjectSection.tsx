"use client"

import { useState } from "react"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "HLS Transcoder - Video Processing with AWS & FFmpeg",
    description:
      "A scalable HLS transcoding system that processes videos using AWS S3, FFmpeg, and RabbitMQ. Supports multipart video uploads, background processing with child processes as workers, and efficient queue management for fault-tolerant transcoding.",
    image: "/placeholder.svg?height=200&width=350",
    status: "Developing...",
    statusColor: "text-green-400",
    tags: ["Node.js", "React.js", "FFmpeg", "AWS", "Child Process", "HLS Streaming"],
    github: "https://github.com",
    live: "https://example.com",
    codePreview: true,
  },
  {
    id: 2,
    title: "botai - A bot that'll give you summary of your video call",
    description:
      "User can paste a meet link then the bot will automatically join the meeting. It'll record the session also generate the AI summary of the session",
    image: "/placeholder.svg?height=200&width=350",
    status: "Developing...",
    statusColor: "text-green-400",
    tags: ["Next.js", "OpenAI", "WebRTC", "Node.js", "AI/ML"],
    github: "https://github.com",
    live: "https://example.com",
    codePreview: false,
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description:
      "A modern real-time chat app with WebSocket connections, message encryption, and beautiful UI. Features include typing indicators, message reactions, and file sharing capabilities.",
    image: "/placeholder.svg?height=200&width=350",
    status: "Completed",
    statusColor: "text-blue-400",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com",
    live: "https://example.com",
    codePreview: false,
  },
  {
    id: 4,
    title: "E-commerce Dashboard",
    description:
      "Full-stack e-commerce admin dashboard with analytics, inventory management, and order processing. Built with modern tech stack and responsive design.",
    image: "/placeholder.svg?height=200&width=350",
    status: "Completed",
    statusColor: "text-blue-400",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
    codePreview: false,
  },
]

export default function PortfolioProjects() {
  const [activeTab, setActiveTab] = useState("My Works")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div className="min-h-screen relative bg-transparent text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header with tabs */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <div className="flex bg-black/[0.96] backdrop-blur-sm border border-gray-700/50 rounded-lg p-1">
              {["My Works", "Client Works"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gray-800 text-white border border-gray-600"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">Some of my cool shits</h1>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            I've worked on a variety of cool shits, from simple websites to mobile apps to complex ML Algorithms
            projects. Here are a few of my favorites. You can find more on my{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              PROJECTS PAGE
            </a>
            .
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-600/70 hover:bg-gray-900/50">
                {/* Project Image/Preview */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  {project.codePreview ? (
                    <div className="absolute inset-0 p-4">
                      <div className="bg-gray-900/80 rounded-lg p-4 h-full overflow-hidden">
                        <div className="text-xs font-mono text-gray-300 leading-relaxed">
                          <div className="text-purple-400">document</div>
                          <div className="text-gray-500">.getElementById</div>
                          <div className="text-yellow-400">{'("submit")'}</div>
                          <div className="text-gray-300 mt-2">else if (i==1) {"{}"}</div>
                          <div className="text-gray-300 ml-4">var atpos=input[i].indexOf</div>
                          <div className="text-blue-400 ml-4">{'("@");'}</div>
                          <div className="text-gray-300 ml-4">var dotpos=input[i]</div>
                          <div className="text-orange-400 ml-4">.lastIndexOf</div>
                          <div className="text-yellow-400 ml-4">{'(".");'}</div>
                          <div className="text-gray-300 mt-2">
                            if (atpos{"<"}1 || dotpos{"<"}atpos+2
                          </div>
                          <div className="text-gray-300">
                            || dotpos+2{">"}=input[i].length) {"{"}
                          </div>
                          <div className="text-gray-300 ml-4">document</div>
                          <div className="text-gray-500 ml-4">.getElementById</div>
                          <div className="text-yellow-400 ml-4">{'("id")'}</div>
                          <div className="text-gray-300 mt-2">else</div>
                          <div className="text-gray-300 ml-4">document</div>
                          <div className="text-gray-500 ml-4">.getElementById</div>
                          <div className="text-yellow-400 ml-4">{'("id")'}</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-3 transition-opacity duration-300 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Button
                      size="sm"
                      className="bg-gray-800/80 backdrop-blur-sm border border-gray-600 text-white hover:bg-gray-700/80 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white leading-tight">{project.title}</h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300 flex-shrink-0 ml-2" />
                  </div>

                  <div className={`text-sm font-medium mb-3 ${project.statusColor}`}>{project.status}</div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-800/50 border border-gray-700/50 rounded text-gray-300 hover:bg-gray-700/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white hover:bg-gray-700/50 hover:border-gray-600/70 transition-all duration-300 px-8 py-3">
            View All Projects
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
