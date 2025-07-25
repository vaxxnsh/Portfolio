export const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company: "Businessroom.ai",
    duration: "Jan 2024 – Apr 2024",
    description:
      "Worked across the stack to build and ship scalable features in a LinkedIn-like platform for investors and entrepreneurs. Built interactive components, integrated APIs, optimized UX, and contributed to frontend and backend logic.",
    tech: ["React", "TypeScript", "Tailwind", "Zustand", "Node.js", "Express", "MySQL", "S3"],
  },
  {
    title: "Freelance Developer",
    company: "Self-employed",
    duration: "2023 – Present",
    description:
      "Collaborated with clients to build responsive websites and scalable full-stack solutions. Focused on clean UI, performance, SEO, and modern UX practices tailored to each client’s vision.",
    tech: ["Next.js", "React", "Framer Motion", "Firebase", "Vercel", "Stripe"],
  },
]

export const projects = [
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