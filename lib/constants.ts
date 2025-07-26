export const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company: "Businessroom.ai",
    duration: "Jan 2025 - Feb 2025",
    description:
      "Worked across the stack to build and ship scalable features in a LinkedIn-like platform for investors and entrepreneurs. Built interactive components, integrated APIs, optimized UX, and contributed to frontend and backend logic.",
    tech: ["React", "TypeScript", "Tailwind", "Zustand", "Node.js", "Express", "MySQL", "S3"],
  },
  {
    title: "Freelance Developer",
    company: "Self-employed",
    duration: "2025 - Present",
    description:
      "Collaborated with clients to build responsive websites and scalable full-stack solutions. Focused on clean UI, performance, SEO, and modern UX practices tailored to each client’s vision.",
    tech: ["Next.js", "React", "Framer Motion", "Prisma", "Vercel", "Razorpay"],
  },
]

export const projects = [
  {
    id: 1,
    title: "Stock Exchange Platform",
    isClient : false,
    description:
      "Built a low-latency, event-driven trading platform with WebSocket updates, Redis queues/pub-sub, and a modular matching engine running at 7–20ms latency.",
    image: "/images/exchange.png",
    status: "Completed",
    statusColor: "text-blue-400",
    tags: ["Next.js", "Redis", "WebSockets", "Express", "Docker", "TimescaleDB"],
    github: "https://github.com/vaxxnsh/exchange-server",
    live: "",
    codePreview: false,
  },
  {
    id: 2,
    title: "P2P File Storage System",
    isClient : false,
    description:
      "Developed a decentralized file storage system in Go with TCP networking, encrypted peer-to-peer transfers, and simulated multi-node synchronization.",
    image: "/images/golang.jpg",
    status: "Completed",
    statusColor: "text-blue-400",
    tags: ["Go", "TCP", "Encryption", "Distributed Systems", "Goroutines"],
    github: "https://github.com/vaxxnsh/distributed-file-storage",
    live: "",
    codePreview: false,
  },
  {
    id: 5,
    title: "Apple Website UI",
    isClient : false,
    description:
      "Recreated Apple's homepage with pixel-perfect UI, smooth animations, and responsive design inspired by Apple’s visual language.",
    image: "/images/apple.png",
    status: "Completed",
    statusColor: "text-blue-400",
    tags: ["Next.js", "Tailwind","Three.js","Framer Motion", "UI/UX"],
    github: "https://github.com/vaxxnsh/AppleWebsite", // Add link if available
    live: "https://ui-apple.vaxxnsh.tech",
    codePreview: false,
  },
  {
    id: 6,
    title: "Metroidvania Game",
    description:
      "Designed and developed a Metroidvania-style game using Kaplay, featuring non-linear level design, character upgrades, and dynamic enemy interactions across a pixel-art world.",
    image: "/images/metroidvania.png",
    status: "Completed",
    statusColor: "text-blue-400",
    tags: ["Kaplay", "Typescript", "2D Platformer", "Pixel Art", "Level Design"],
    github: "https://github.com/vaxxnsh/metroidvania", // Add if code/assets are public
    live: "https://game.vaxxnsh.tech/",   // Add if hosted (e.g. Itch.io or custom page)
    codePreview: false,
  },
  {
    id: 3,
    title: "Zap8n — Workflow Automation Platform",
    isClient : false,
    description:
      "Created an event-driven automation platform with Kafka, Solana blockchain triggers, and reliable task orchestration using the Transactional Outbox Pattern.",
    image: "/images/zap8n.png",
    status: "In Progress",
    statusColor: "text-green-400",
    tags: ["Kafka", "Solana", "Next.js", "Docker", "Express", "PostgreSQL"],
    github: "https://github.com/vaxxnsh/zap8n",
    live: "",
    codePreview: false,
  },
  {
  id: 7,
  title: "RSS Blog Aggregator Backend",
  description:
    "Developed a backend service in Go to fetch, parse, and store RSS feed posts using PostgreSQL. Implemented REST APIs with chi, typed queries via sqlc, and schema migrations with goose.",
  image: "/images/rss.webp",
  status: "Completed",
  statusColor: "text-blue-400",
  tags: ["Go", "PostgreSQL", "Chi", "RSS", "sqlc", "Goose", "REST API"],
  github: "https://github.com/vaxxnsh/rss-aggregator",
  live: "", // Add if hosted
  codePreview: false,
},
{
  id: 8,
  title: "Pokedex Mobile App",
  description:
    "Built a modern mobile Pokedex using Expo Router, React Native, and React Query. Features include dynamic Pokémon search, categorized tabs, and optimized performance with FlashList and native animations.",
  image: "/images/pokemon.png",
  status: "Completed",
  statusColor: "text-blue-400",
  tags: [
    "Expo",
    "React Native",
    "Expo Router",
    "React Query",
    "Zustand",
    "TailwindCSS",
  ],
  github: "https://github.com/vaxxnsh/Pokedex", // Add if public
  live: "",   // Add if hosted or shared via Expo
  codePreview: true,
},
  {
    id: 4,
    title: "Rudraksha E-commerce Platform",
    isClient : true,
    description:
      "Developed a full-stack e-commerce platform with Razorpay payments, Prisma ORM, and a rich UI built using GSAP and Swiper.js.",
    image: "/images/rudraksha.png",
    status: "Completed",
    statusColor: "text-blue-400",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Razorpay", "GSAP", "Tailwind"],
    github: "", // Add link if available
    live: "https://www.narayanarudraksha.com/",
    codePreview: false,
  },
];



export const videos = [
  {
    title: 'how hotstar scaled 25 million users',
    href: 'https://youtu.be/9b7HNzBB3OQ?si=0QB12rckn9InGG6j',
  },
  {
    title: 'From Meth To Netflix',
    href: 'https://youtu.be/JjHFubUPLV0?si=W0mntSTUf2ZjghBc',
  },
  {
    title: 'Next-door 10x engineer // PART 2',
    href: 'https://youtu.be/3yeb5gSLnjw?si=vLp_CwdND6c5milU',
  },
]