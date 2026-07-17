export const categories = ["All", "Web", "Mobile", "Testing", "UI/UX", "Product Management"];

export const projects = [
  {
    id: 1,
    title: "Online Book Introduction and Sales Website",
    category: "Web",
    image: "https://res.cloudinary.com/dnxgjpunr/image/upload/v1784316476/sebook_ogyxoh.png",
    teamSize: 5,
    images: [
      "https://res.cloudinary.com/dnxgjpunr/image/upload/v1784316476/sebook_ogyxoh.png",
      "https://res.cloudinary.com/dnxgjpunr/image/upload/v1784316476/sebook1_kcgi9m.png",
      "https://res.cloudinary.com/dnxgjpunr/image/upload/v1784316476/sebook2_pdmls0.png",
      "https://res.cloudinary.com/dnxgjpunr/image/upload/v1784316476/sebook3_tyhqhg.png",
      "https://res.cloudinary.com/dnxgjpunr/image/upload/v1784316476/sebook4_jbgqeg.png",
      "https://res.cloudinary.com/dnxgjpunr/image/upload/v1784316476/sebook5_ndkugy.png"
    ],
    description: "A comprehensive e-commerce platform for book lovers, allowing users to browse, search, and purchase books online. It includes an admin dashboard for inventory management.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    features: [
      "User authentication and authorization (JWT)",
      "Shopping cart and order management",
      "Payment gateway integration",
      "Admin dashboard with sales analytics"
    ],
    role: "Full-Stack Developer",
    challenges: "Handling concurrent transactions during peak shopping hours.",
    solutions: "Implemented Redis caching and optimized database queries to ensure smooth performance.",
    lessonsLearned: "Gained deep understanding of microservices architecture and caching strategies.",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    note:"This project was developed as part of a university coursework assignment. It is no longer actively maintained or under development, and some features or services may be unavailable"

  },
  // {
  //   id: 2,
  //   title: "MiniZalo",
  //   category: "Mobile",
  //   image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
  //   description: "A real-time chat application optimized for mobile platforms, offering instant messaging, media sharing, and group chats.",
  //   technologies: ["React Native", "Expo", "WebSocket", "Node.js", "MongoDB"],
  //   features: [
  //     "Real-time bidirectional messaging",
  //     "Push notifications",
  //     "Media sharing (Images, Voice notes)",
  //     "End-to-end encryption basics"
  //   ],
  //   role: "Mobile Developer",
  //   challenges: "Ensuring low latency in message delivery across unstable mobile networks.",
  //   solutions: "Used WebSocket with Socket.io fallback mechanisms and implemented local message queues.",
  //   lessonsLearned: "Mastered React Native animations and offline-first mobile app design.",
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com"
  // },
  {
    id: 2,
    title: "LUMIÈRE - Premium Fashion E-Commerce Platform",
    category: "Web",
    image: "https://res.cloudinary.com/dnxgjpunr/image/upload/v1784316700/Screenshot_2026-07-18_022619_br3nqa.png",
    description: "A modern, high-end e-commerce website designed for a minimalist fashion brand. The platform offers a seamless shopping experience with smooth animations, responsive design, and is powered by a headless CMS for robust content management.",
    technologies: ["Next.js", "React", "Sanity CMS", "CSS Modules", "Framer Motion", "Vercel"],
    features: [
      "High-end minimalist UI with smooth scroll animations",
      "Dynamic product catalog with sorting, pagination, and related products",
      "Headless CMS integration (Sanity.io) for content management",
      "Real-time client-side shopping cart with interactive toast notifications",
      "Live search functionality for instantly finding products"
    ],
    role: "Front-End / Full-Stack Developer",
    challenges: "Ensuring a premium feel with fluid animations without sacrificing page load performance.",
    solutions: "Utilized Next.js Server Components combined with client-side caching to ensure lightning-fast load times and implemented framer-motion strategically.",
    lessonsLearned: "Gained deep expertise in combining the Next.js App Router architecture with a headless CMS.",
    githubUrl: "https://github.com/trieu22676191/fashion",
    liveUrl: "https://fashion.phutrieudev.cloud/"
  },
  // {
  //   id: 3,
  //   title: "Enterprise QA Suite",
  //   category: "Testing",
  //   image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
  //   description: "A comprehensive QA project focused on testing an enterprise-level e-commerce application to ensure product stability and performance.",
  //   technologies: ["Selenium", "Postman", "Jira", "JUnit"],
  //   features: [
  //     "Automated UI testing scripts",
  //     "Comprehensive API testing suites",
  //     "Detailed bug tracking and reporting",
  //     "Performance load testing"
  //   ],
  //   role: "QA Engineer / Tester",
  //   challenges: "Maintaining test scripts alongside a rapidly changing UI layout.",
  //   solutions: "Adopted the Page Object Model (POM) design pattern for stable automated tests.",
  //   lessonsLearned: "Importance of robust test architecture and clear bug reproduction steps.",
  //   githubUrl: "",
  //   liveUrl: ""
  // },
  // {
  //   id: 4,
  //   title: "E-Learning Dashboard",
  //   category: "UI/UX",
  //   image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop",
  //   description: "A high-fidelity design and interactive prototype for an e-learning platform focusing on user engagement and accessibility.",
  //   technologies: ["Figma", "Adobe XD", "Miro"],
  //   features: [
  //     "User journey mapping",
  //     "Interactive high-fidelity prototypes",
  //     "Comprehensive design system & UI kit",
  //     "Dark mode support"
  //   ],
  //   role: "UI/UX Designer",
  //   challenges: "Creating a data-heavy dashboard that doesn't overwhelm the user.",
  //   solutions: "Implemented progressive disclosure and clean data visualization graphs.",
  //   lessonsLearned: "User testing is critical; initial assumptions are often disproven by real users.",
  //   githubUrl: "",
  //   liveUrl: "https://figma.com"
  // },
  // {
  //   id: 5,
  //   title: "Taskify Roadmap",
  //   category: "Product Management",
  //   image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
  //   description: "A complete product management lifecycle documentation for a task management tool targeted at remote teams.",
  //   technologies: ["Jira", "Confluence", "Trello", "Miro"],
  //   features: [
  //     "Product Requirement Documents (PRD)",
  //     "User story mapping",
  //     "Competitor analysis",
  //     "Feature prioritization (MoSCoW method)"
  //   ],
  //   role: "Product Manager",
  //   challenges: "Balancing stakeholder requests with engineering capacity constraints.",
  //   solutions: "Used the RICE scoring model to objectively prioritize features for the MVP.",
  //   lessonsLearned: "Clear communication and data-driven prioritization are key to successful product delivery.",
  //   githubUrl: "",
  //   liveUrl: ""
  // }
];
