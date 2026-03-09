import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
  "id": "smart-bookmark-app",
  "companyName": "SmartBookmark",
  "type": "Professional",
  "category": ["Productivity", "Full Stack", "Real-time Apps"],
  "shortDescription": "A modern, real‑time bookmark manager with Google OAuth, private per‑user bookmarks, instant cross‑tab sync, and a sleek dark theme – built with Next.js and Supabase.",
  "githubLink": "https://github.com/jacobjerryarackal/smart-bookmark",
  "websiteLink": "https://smart-bookmark-iota-woad.vercel.app",
  "techStack": [
    "Next.js",
    "Typescript",
    "Tailwind CSS",
    "Supabase",
    "Framer Motion",
    "React Hot Toast",
    "Lucide React Icons",
    "Vercel"
  ],
  startDate: new Date("2026-03-01"),
  endDate: new Date("2026-03-07"),
  "companyLogoImg": "/projects/smart-bookmark/logo.png",
  "pagesInfoArr": [
    {
      "title": "Secure Google OAuth Login",
      "description": "Users sign in with their Google account – no passwords, no friction. The login page features a sleek dark gradient and a polished Google button with hover animations.",
      "imgArr": [
        "/projects/smart-bookmark/login.png"
      ]
    },
    {
      "title": "Dashboard & Bookmark Management",
      "description": "After login, users land on a protected dashboard where they can add new bookmarks (title + URL) and see their existing ones. The form is clean and responsive.",
      "imgArr": [
        "/projects/smart-bookmark/dashboard.png",
        "/projects/smart-bookmark/add-form.png"
      ]
    },
    {
      "title": "Real‑time Sync Across Tabs",
      "description": "Bookmarks update instantly across all open browser tabs – no refresh needed. Powered by Supabase Realtime, any addition or deletion is broadcast immediately.",
      "imgArr": [
        "/projects/smart-bookmark/realtime-sync.png",
        "/projects/smart-bookmark/signout-modal.png",
      ]
    },
    {
      "title": "Animated Bookmark Cards & Delete Confirmation",
      "description": "Each bookmark appears as a stylish card with smooth entrance animations. Deleting a bookmark triggers a custom modal with a cancel/delete option and shows a success toast.",
      "imgArr": [
        "/projects/smart-bookmark/bookmark-card.png",
        "/projects/smart-bookmark/delete-modal.png",
        "/projects/smart-bookmark/toast.png"
      ]
    },
    {
      "title": "Email/Password Signup (Extended)",
      "description": "Beyond the core spec, users can also create an account with email/password and upload a profile picture. Avatars appear in the header alongside the email.",
      "imgArr": [
        "/projects/smart-bookmark/signup.png",
        "/projects/smart-bookmark/header-avatar.png"
      ]
    }
  ],
  "descriptionDetails": {
    "paragraphs": [
      "SmartBookmark is a real‑time bookmark manager that combines elegant design with robust functionality. It was built to demonstrate a full‑stack application using Next.js (App Router) and Supabase, with a focus on instant data synchronization and a polished user experience.",
      "The application leverages Supabase for authentication (Google OAuth) and database, with PostgreSQL storing user‑specific bookmarks. Row‑Level Security (RLS) policies ensure that each user sees only their own data. Realtime subscriptions propagate insert and delete events to all connected clients, enabling seamless multi‑tab collaboration.",
      "The frontend is crafted with Tailwind CSS and Framer Motion, featuring a custom dark color palette (#2B2D42, #8D99AE, #EDF2F4, #EF233C, #D90429) and smooth animations. Custom modal components (with React Portal) and toast notifications enhance the interactive experience."
    ],
    "bullets": [
      "Implemented Google OAuth authentication with secure session handling using Supabase SSR.",
      "Designed a responsive, animated UI with Tailwind CSS and Framer Motion, including card entrance/exit animations.",
      "Built real‑time bookmark sync using Supabase Realtime – changes appear instantly in all open tabs.",
      "Added custom confirmation modals (delete, logout) rendered via React Portal to avoid CSS containment issues.",
      "Integrated react‑hot‑toast for non‑intrusive success/error messages.",
      "Extended functionality with email/password signup and mandatory profile picture upload (stored in Supabase Storage).",
      "Deployed the frontend on Vercel with environment variables configured for production; updated Google Cloud OAuth redirect URIs and Supabase URL settings.",
      "Used TypeScript for type safety and generated database types from Supabase CLI."
    ]
  }
},
{
  id: "instant-dashboard-ai",
  companyName: "Instant Dashboard Generator",
  type: "Professional",
  category: ["LLM", "AI Tools", "Dashboard", "Frontend"],
  shortDescription:
    "Built an AI-powered web application that converts raw JSON data into a fully functional HTML/CSS dashboard using natural language prompts and large language models.",
  githubLink: "https://github.com/jacobjerryarackal/Instant-Dashboard",
  websiteLink: "https://instant-dashboard-wine.vercel.app/",
  techStack: [
    "Next.js",
    "Typescript",
    "CSS 3",
    "Google Gemini",
    "HTML 5",
    "Javascript",
    "Vercel",
    "Framer Motion"
  ],
  startDate: new Date("2026-01-10"),
  endDate: new Date("2026-01-18"),
  companyLogoImg: "/projects/instantdashboard/logo.png",
  pagesInfoArr: [
    {
      title: "Landing & Workflow Overview",
      description:
        "Modern landing interface explaining the three-step workflow: JSON input, prompt instructions, and AI-generated dashboard preview.",
      imgArr: [
        "/projects/instantdashboard/output1.png"
      ],
    },
    {
      title: "JSON Input & Validation",
      description:
        "Large JSON editor with real-time validation to ensure structured data is correct before sending it to the AI model.",
      imgArr: [
        "/projects/instantdashboard/output2.png",
        "/projects/instantdashboard/output3.png"
      ],
    },
    {
      title: "Prompt Instructions",
      description:
        "Prompt input section allowing users to describe dashboard layout, style, and presentation using natural language.",
      imgArr: [
        "/projects/instantdashboard/output4.png",
        "/projects/instantdashboard/output5.png",
      ],
    },
    {
      title: "Generated Dashboard Output",
      description:
        "Fully rendered one-page dashboard displaying totals, summaries, charts, and tabular data derived strictly from the provided JSON.",
      imgArr: [
        "/projects/instantdashboard/output6.png",
        "/projects/instantdashboard/output7.png",
        "/projects/instantdashboard/output8.png",
      ],
    }
  ],
  descriptionDetails: {
    paragraphs: [
      "The Instant Dashboard App is an AI-driven tool designed to bridge the gap between raw structured data and visual presentation. Users provide JSON data along with natural language instructions, and the system generates a complete one-page dashboard automatically.",
      "The application is built using Next.js App Router and TypeScript, with server-side API routes used to securely communicate with the Google Gemini large language model.",
      "A carefully designed system prompt instructs the AI to behave as a frontend developer and return only valid HTML and CSS, preventing hallucinations and ensuring accurate data representation.",
      "The generated dashboard is rendered inside an iframe for safety and isolation, allowing instant preview without executing untrusted scripts."
    ],
    bullets: [
      "Designed an end-to-end AI workflow from JSON input to visual dashboard rendering.",
      "Implemented secure server-side LLM integration using Google Gemini API.",
      "Engineered a strict system prompt to restrict output to valid HTML/CSS only.",
      "Ensured accurate data usage with zero hallucinated values from the AI.",
      "Built real-time JSON validation with graceful error handling.",
      "Rendered AI output safely using iframe-based sandboxing.",
      "Deployed the application on Vercel with optimized production builds."
    ]
  }
},
{
  id: "secure-test-environment-enforcement",
  companyName: "SecureAssess",
  type: "Professional",
  category: ["EdTech", "Full Stack", "Monitoring"],
  shortDescription:
    "Developed a robust security layer for web-based assessments that restricts browser actions (Copy/Paste/Right-click) and provides an immutable, timestamped audit trail of candidate behavior.",
  githubLink: "https://github.com/jacobjerryarackal/Secure-Test-Environment-Enforcement", 
  websiteLink: "https://secure-test-environment-enforcement-one.vercel.app/",
  techStack: [
    "Next.js",
    "Typescript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Axios",
    "Render",
    "Vercel"
  ],
  startDate: new Date("2026-02-15"),
  endDate: new Date("2026-02-27"),
  companyLogoImg: "/projects/stee/logo.png",
  pagesInfoArr: [
    {
      title: "Landing & Assessment Setup",
      description:
        "Initial interface where candidates register or enter their Attempt ID to begin the assessment under enforced security protocols.",
      imgArr: [
        "/projects/stee/landing.png",
        "/projects/stee/landing2.png",
        "/projects/stee/landing3.png",
        "/projects/stee/landing4.png",
      ],
    },
    {
      title: "Real-time Behavior Monitoring",
      description:
        "Backend integration view showing how tab switches, fullscreen escapes, and focus changes are captured as they happen.",
      imgArr: [
        "/projects/stee/monitoring-log.png",
        "/projects/stee/monitoring-log2.png",
      ],
    },
    {
      title: "Enforced Assessment Environment",
      description:
        "The core testing interface featuring browser restriction triggers. Any attempt to right-click, copy, or paste triggers a warning toast and is immediately logged.",
      imgArr: [
        "/projects/stee/assessment-view.png",
        "/projects/stee/assessment-view2.png",
        "/projects/stee/assessment-view3.png",
        "/projects/stee/assessment-view4.png",
        "/projects/stee/warning-toast.png",
        "/projects/stee/warning-toast2.png",
        "/projects/stee/warning-toast3.png",
      ],
    },
    {
      title: "Unified Audit Trail",
      description:
        "Comprehensive employer-facing dashboard displaying immutable event logs with timestamps, attempt IDs, and browser metadata.",
      imgArr: [
        "/projects/stee/result.png"
      ],
    }
  ],
  descriptionDetails: {
    paragraphs: [
      "The Secure Test Environment Enforcement (STEE) project is a high-stakes assessment solution designed to prevent academic dishonesty and provide detailed behavioral insights to employers.",
      "The application utilizes a dual-stack architecture with a Next.js frontend and a Node.js/Express backend, ensuring that security enforcement happens on the client-side while critical logs are persisted securely in a MongoDB database.",
      "A sophisticated event-logging engine batches and transmits candidate actions—such as copy attempts or tab switching—to an API, creating an immutable audit trail that cannot be tampered with after submission.",
      "Strict CORS policies and server-side validation ensure that only authorized assessment environments can communicate with the logging infrastructure, preventing unauthorized data injection."
    ],
    bullets: [
      "Implemented hardware-level browser restrictions including disabling Right-click, Copy (Ctrl+C), Paste (Ctrl+V), and Cut (Ctrl+X).",
      "Engineered a Unified Event Schema capturing Event Type, Timestamp, Attempt ID, and detailed Browser Metadata.",
      "Developed real-time monitoring for Tab/Focus changes and Fullscreen state enforcement.",
      "Built an efficient log-batching system to reduce network overhead while maintaining audit accuracy.",
      "Created a 'Health Check' infrastructure to monitor backend uptime on Render across high-traffic assessment windows.",
      "Configured robust CORS and security middleware to protect API endpoints from cross-origin exploits.",
      "Deployed a scalable full-stack architecture using Vercel for the frontend and Render for the backend."
    ]
  }
},
 {
  id: "superai",
  companyName: "SuperAI Documents",
  type: "Personal",
  category: ["AI/ML", "NLP", "Full Stack"],
  shortDescription:
    "Built an AI-powered RAG application for document understanding, retrieval, and intelligent Q&A.",
  githubLink: "https://github.com/jacobjerryarackal/AI-powered-Insight-Generator-from-PDFs", 
  websiteLink:
    "https://ai-powered-insight-generator-from-pdfs-lycfxrx8axjq22e2xn4d9b.streamlit.app/",
  techStack: [
    "Python",
    "Vector Database",
    "Streamlit",
    "Gradio",
    "LangChain",
    "FAISS",
    "HuggingFace Embeddings",
    "Groq",
    "OpenAI",
    "PyPDF2"
  ],
  startDate: new Date("2024-07-01"),
  endDate: new Date("2024-09-30"),
  companyLogoImg: "/projects/superai/logo.png",
  pagesInfoArr: [
     {
      title: "Streamlit GUI",
      description:
        "Allows users to interact with Streamlit GUI",
      imgArr: ["/projects/superai/streamlit gui.png","/projects/superai/gui 2.png"],
    },
    {
      title: "Document Upload & Processing",
      description:
        "Allows users to upload PDFs, extract text, and generate embeddings for semantic search.",
      imgArr: ["/projects/superai/document upload.png"],
    },
    {
      title: "Interactive Q&A",
      description:
        "Users can ask natural language questions and receive AI-powered responses derived directly from document context.",
      imgArr: ["/projects/superai/Interactive Q&A.png","/projects/superai/Q&A 2.png","/projects/superai/Q&A 3.png"],
    },
  ],
  descriptionDetails: {
    paragraphs: [
      "SuperAI Documents is an end-to-end AI-powered assistant designed for intelligent document processing, semantic search, and contextual Q&A.",
      "Built with LangChain, FAISS, and LlamaIndex, the system leverages advanced embedding-based retrieval for efficient document understanding.",
      "Users can interact through an intuitive Streamlit/Gradio-based frontend, where they ask questions and receive context-aware answers generated by LLMs such as Groq or OpenAI.",
      "This project highlights expertise in RAG architectures, vector search, and building scalable document intelligence solutions."
    ],
    bullets: [
      "Implemented Retrieval-Augmented Generation (RAG) for accurate and grounded responses",
      "Used LangChain with FAISS and HuggingFace embeddings for semantic search",
      "Integrated Groq and OpenAI APIs for scalable LLM-powered Q&A",
      "Designed a Streamlit/Gradio UI for interactive chat with documents",
      "Maintained conversation history for multi-turn contextual queries",
      "Supported multiple file formats including PDF, DOCX, and TXT",
      "Optimized performance with vector databases for fast similarity search",
      "Demonstrated real-world application of AI in knowledge management and document automation"
    ],
  },
},
  {
  id: "movie-ticket-booking",
  companyName: "Movie Ticket Booking",
  type: "Professional",
  category: ["Web Dev", "Full Stack"],
  shortDescription: "Full-stack movie ticket booking app with OAuth, seat selection and payment integration.",
  githubLink: "https://github.com/jacobjerryarackal/BookMovie",
  techStack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Clerk", "Razorpay", "Twilio"],
  startDate: new Date("2024-07-01"),
  endDate: new Date("2024-09-01"),
  companyLogoImg: "/projects/movie/logo.png",
  pagesInfoArr: [
    { title: "Sign In", imgArr: ["/projects/movie/Sign In.png"] },
    { title: "Landing / Browse", imgArr: ["/projects/movie/Landing.png"] },
    { title: "Movie List", imgArr: ["/projects/movie/Movie List.png"] },
    { title: "Movie Details", imgArr: ["/projects/movie/Movie Detail.png"] },
    { title: "Seat Selection", imgArr: ["/projects/movie/Seat Selection.png"] },
    { title: "Seat Confirmation", imgArr: ["/projects/movie/Seat Confirmation.png"] },
    { title: "Ticket Details", imgArr: ["/projects/movie/Ticket Details.png"] },
    { title: "Ticket Confirmation", imgArr: ["/projects/movie/Ticket Confirmation.png"] },
    { title: "Razorpay Payment Gateway", imgArr: ["/projects/movie/Razorpay.png"] },
    { title: "Razorpay Payment Process", imgArr: ["/projects/movie/Razorpay payment process.png"] },
    { title: "Razorpay Payment Sucess", imgArr: ["/projects/movie/Razorpay payment sucess.png"] },
    { title: "Whatsapp Confirmation", imgArr: ["/projects/movie/WhatsApp Confirmation.png"] },


  ],
  descriptionDetails: {
    paragraphs: [
      "Built an end-to-end movie ticket booking system with seat selection, OTP & email verification, and payment integration.",
      "Implemented OAuth (Google) for authentication, Clerk for user management, and Stripe for payments.",
    ],
    bullets: [
      "Implemented scalable seat booking with optimistic locking.",
      "Integrated OAuth and 2FA flows for secure sign-in using Clerk.",
      "Added Razorpay Payement for payment process.",
    ],
  },
},
{
  id: "timesheet-admin",
  companyName: "Timesheet Management Admin Panel",
  type: "Professional",
  category: ["Web Dev", "Full Stack", "Admin Dashboard"],
  shortDescription:
    "Developed a modern admin dashboard for managing users, timesheets, approvals, reports, and system settings with a scalable Next.js App Router architecture and Ant Design UI.",
  githubLink: "https://github.com/jacobjerryarackal/timesheet-admin-page",
  websiteLink: "https://timesheet-admin-page.vercel.app/",
  techStack: [
    "Next.js",
    "Typescript",
    "Ant Design",
    "CSS 3",
    "Recharts",
    "Day.js"
  ],
  startDate: new Date("2025-11-01"),
  endDate: new Date("2025-12-31"),
  companyLogoImg: "/projects/admintimesheet/logo.png",
  pagesInfoArr: [
    {
      title: "Dashboard Overview",
      description:
        "Admin dashboard showing key metrics, quick actions, pending approvals, and system tasks with a clean and responsive layout.",
      imgArr: [
        "/projects/admintimesheet/dashboard.png"
      ],
    },
    {
      title: "User Management",
      description:
        "User listing and detailed user profile pages with role, department, status, and activity tracking.",
      imgArr: [
        "/projects/admintimesheet/users.png",
        "/projects/admintimesheet/user-detail.png"
      ],
    },
    {
      title: "Timesheet Management",
      description:
        "Timesheet listing, approval workflow, weekly breakdown, and submission tracking using date-based filters.",
      imgArr: [
        "/projects/admintimesheet/timesheets.png",
        "/projects/admintimesheet/timesheets2.png",
        "/projects/admintimesheet/timesheet-detail.png"
      ],
    },
    {
      title: "Reports & Analytics",
      description:
        "Interactive charts and tables built with Recharts to visualize department-wise workload and time utilization.",
      imgArr: [
        "/projects/admintimesheet/reports.png",
        "/projects/admintimesheet/reports2.png"
      ],
    },
    {
      title: "Leave Management",
      description:
        "Interactive calendars and tables for tracking employee leave requests, statuses, and balances.",
      imgArr: [
        "/projects/admintimesheet/leave.png",
        "/projects/admintimesheet/leaves.png",
        "/projects/admintimesheet/leave-details.png",
      ],
    },
    {
      title: "Settings & Policies",
      description:
        "Configuration screens for timesheet policies, approval rules, and system-level settings.",
      imgArr: [
        "/projects/admintimesheet/settings.png",
        "/projects/admintimesheet/settings2.png",
        "/projects/admintimesheet/settings3.png",
      ],
    }
  ],
  descriptionDetails: {
    paragraphs: [
      "The Timesheet Management Admin Panel is a fully responsive web application designed to help administrators manage employees, track working hours, approve timesheets, and generate insightful reports.",
      "The frontend is built using Next.js with the App Router and TypeScript, ensuring scalability, type safety, and maintainable code structure. Ant Design components were customized using CSS Modules for a clean enterprise-grade UI.",
      "Charts and analytics were implemented using Recharts to visualize department-wise workloads and pending approvals, while Day.js was used extensively for date handling, week calculations, and relative time display.",
      "This project demonstrates strong frontend architecture, component reusability, and real-world admin dashboard patterns commonly used in enterprise applications."
    ],
    bullets: [
      "Built a scalable admin dashboard using Next.js App Router and TypeScript.",
      "Implemented user management with detailed profile and role-based information.",
      "Developed timesheet approval workflows with weekly and date-based filtering.",
      "Integrated Recharts for interactive analytics and visual reporting.",
      "Used Ant Design with custom CSS Modules for a polished enterprise UI.",
      "Handled complex date logic using Day.js plugins (week, relative time, ranges).",
      "Deployed and configured the project on Vercel with production-ready builds."
    ]
  }
},
{
  id: "car-booking",
  companyName: "CarApp",
  type: "Professional",
  category: ["Web Dev", "Full Stack"],
  shortDescription:
    "Built a full-featured vehicle booking & management app with Next.js frontend + GraphQL-powered backend, enabling dynamic searches, scheduling, and user & vehicle management.",
  githubLink: "https://github.com/jacobjerryarackal/CarApp",
  techStack: ["Next.js", "Typescript", "React", "GraphQL", "Node.js", "PostgreSQL", "Prisma", "Stripe", "JWT"],
  startDate: new Date("2024-01-01"),    // approximate start
  endDate: new Date("2024-06-01"),      // or latest update
  companyLogoImg: "/projects/carapp/logo.png", // you may want to add a logo
  pagesInfoArr: [
    { title: "Sign In", imgArr: ["/projects/carapp/Car login.png"] },
    { title: "Admin Sign In", imgArr: ["/projects/carapp/Admin car login.png"] },
    {
      title: "Main Car Listing Page",
      description:
        "List of available vehicles with search, filters and images rendered using Next.js for client-side dynamic filtering.",
      imgArr: ["/projects/carapp/Home.png","/projects/carapp/Car list.png","/projects/carapp/Car list 2.png"],
    },
    {
      title: "Vehicle Detail & Pricing Page",
      description:
        "Detailed view showing vehicle features, price tiers, and availability, fetched via GraphQL queries.",
      imgArr: ["/projects/carapp/Car details.png", "/projects/carapp/Car details 2.png", "/projects/carapp/Car details 3.png",],
    },
    {
      title: "Booking Workflow",
      description:
        "Users can book vehicles, choose dates & view booking summaries; managed with State and GraphQL mutations.",
      imgArr: ["/projects/carapp/Car Booking.png","/projects/carapp/Car Booking 2.png","/projects/carapp/Car Booking 3.png",],
    },
    { title: "Stripe Payment", imgArr: ["/projects/carapp/Stripe Payment.png","/projects/carapp/Stripe payment 2.png"] },
    {
      title: "Admin Dashboard",
      description:
        "Admin panel for handling vehicles, manufacturers, models, pricing and user management. CRUD operations via GraphQL.",
      imgArr: ["/projects/carapp/Admin vehicle dashboard.png",],
    }
  ],
  descriptionDetails: {
    paragraphs: [
      `CarApp is built as a full-stack vehicle booking & management platform with focus on both user experience and admin operations. I employed Next.js + React for the frontend and a GraphQL server (Node + Prisma + PostgreSQL) for the backend to provide strongly typed, efficient API interactions.`,
      `All data fetching (vehicles, features, pricing, bookings) is done via GraphQL queries and mutations. I structured the schema so vehicle types, feature associations, and pricing tiers are dynamically configurable, giving users and admins flexibility.`,
      `JWT authentication has been implemented for secure user & admin login sessions, ensuring role-based access control across the application.`,
      `I ensured data consistency with Prisma migrations and leveraged PostgreSQL for relational data integrity (e.g. many‐to‐many between vehicles and features).`,
      `On the frontend, responsive UI handles image loading/fallbacks, filter/search states, and optimized rendering. Also handled error/fallback states for missing images etc., improving UX robustness.`
    ],
    bullets: [
      "Built a GraphQL API for all core data models: Vehicle, Feature, VehicleType, Manufacturer, Booking, Pricing.",
      "Implemented JWT authentication for secure user and admin access.",
      "Implemented many-to-many relations (vehicles ↔ features, vehicles ↔ vehicle types) with Prisma.",
      "Used Next.js for SSR/SSG where appropriate, with dynamic pages for vehicle detail views.",
      "Set up image fallback mechanisms, client-side state for filters & search, and ensured responsive UI UX.",
      "Designed admin panel with CRUD capabilities for content management via GraphQL mutations."
    ]
  }
},
  {
  id: "procoder",
  companyName: "PROCODER - Multi-Programming Code Assistant",
  type: "Personal",
  category: ["AI/ML", "Full Stack", "Developer Tools"],
  shortDescription:
    "Built an AI-powered end-to-end code assistant app using CodeLlama, LLaMA2, and Gradio with support for multi-language programming and interactive user interface.",
  githubLink:
    "https://github.com/jacobjerryarackal/PROCODER-End-To-End-Multi-Programming-Code-Assistant-App-Using-CodeLlama-LLAMA2-Large-Language-Model",
  techStack: [
    "Python",
    "Gradio",
    "Ollama",
    "CodeLlama",
    "LLaMA2",
    "REST API",
    "Requests",
    "JSON"
  ],
  startDate: new Date("2024-04-01"),
  endDate: new Date("2024-06-30"),
  companyLogoImg: "/projects/procoder/logo.png",
  pagesInfoArr: [
    {
      title: "Gradio UI",
      description:
        "Interactive Gradio-based user interface for entering prompts and viewing AI-generated code outputs.",
      imgArr: ["/projects/procoder/Gradio.png"],
    },
    {
      title: "Prompt History",
      description:
        "Maintains conversation history to provide context-aware responses from the model.",
      imgArr: ["/projects/procoder/prompt history.png"],
    },
    {
      title: "Code Generation",
      description:
        "Generates optimized, multi-language code snippets tailored to user queries.",
      imgArr: ["/projects/procoder/code generation.png","/projects/procoder/code generation 2.png"],
    },
  ],
  descriptionDetails: {
    paragraphs: [
      "PROCODER is an end-to-end AI-powered coding assistant application designed to help developers generate, debug, and optimize code in multiple programming languages.",
      "Built using CodeLlama and LLaMA2 models, the application connects with the Ollama API to deliver context-aware code completions and solutions.",
      "The frontend is developed with Gradio, providing an easy-to-use interface for users to input prompts, view generated results, and maintain a continuous conversation history.",
      "This project demonstrates expertise in AI model integration, REST API communication, and interactive tool development for developer productivity."
    ],
    bullets: [
      "Integrated CodeLlama and LLaMA2 models with Ollama API for AI-driven code generation",
      "Developed interactive Gradio-based interface with support for multi-turn conversations",
      "Implemented conversation history tracking for better context-aware responses",
      "Designed error-handling mechanisms to manage failed API responses",
      "Focused on supporting multiple programming languages for diverse developer needs",
      "Optimized request handling and response parsing using Python Requests and JSON",
      "Delivered a scalable AI-powered coding assistant tool for personal and professional use"
    ],
  },
},
{
  id: "spacex",
  companyName: "SpaceX Clone",
  type: "Personal",
  category: ["Web Dev", "Full Stack"],
  shortDescription:
    "Developed a SpaceX-inspired full-stack web application featuring rocket launches, missions, and booking functionality with a responsive Next.js + React frontend and Node.js + Express + MongoDB backend.",
  githubLink: "https://github.com/jacobjerryarackal/SpaceX-clone",
  websiteLink:
    "https://space-x-clone-sandy.vercel.app/",
  techStack: ["Next.js", "React", "CSS 3", "Node.js", "Express", "MongoDB"],
  startDate: new Date("2023-10-01"),   
  endDate: new Date("2023-12-15"),     
  companyLogoImg: "/projects/spacex/logo.png", 
  pagesInfoArr: [
    { title: "Registeration Page", imgArr: ["/projects/spacex/Register.png"] },
    {
      title: "Missions & Rockets",
      description:
        "Dynamic listing of rockets and missions, styled with CSS and powered by Next.js client-side rendering.",
      imgArr: [
        "/projects/spacex/Home.png",
         "/projects/spacex/Home 3.png",
         "/projects/spacex/Home 4.png",
         "/projects/spacex/Home 5.png",
         "/projects/spacex/Home 6.png",
      ],
    },
    {
      title: "Starship",
      description:
        "Detailed view for each launch or mission with images, mission data, and descriptions fetched from backend API.",
      imgArr: [
        "/projects/spacex/S1.png",
        "/projects/spacex/S2.png",
        "/projects/spacex/S3.png",
        "/projects/spacex/S4.png",
        "/projects/spacex/S5.png",
        "/projects/spacex/S6.png",
        "/projects/spacex/S7.png",
      ],
    },
    {
      title: "Falcon 9",
      imgArr: [
        "/projects/spacex/F6.png",
        "/projects/spacex/F2.png",
        "/projects/spacex/F3.png",
        "/projects/spacex/F4.png",
        "/projects/spacex/F5.png",
        "/projects/spacex/F1.png",
      ],
    },
    {
      title: "Falcon Heavy",
      imgArr: [
        "/projects/spacex/FH1.png",
        "/projects/spacex/FH2.png",
        "/projects/spacex/FH3.png",
        "/projects/spacex/FH4.png",
        "/projects/spacex/FH5.png",
        "/projects/spacex/FH6.png",
      ],
    },
    {
      title: "Dragon",
      imgArr: [
        "/projects/spacex/D1.png",
        "/projects/spacex/D2.png",
        "/projects/spacex/D3.png",
        "/projects/spacex/D4.png",
        "/projects/spacex/D5.png",
        "/projects/spacex/D6.png",
        "/projects/spacex/D7.png",
      ],
    },
  ],
  descriptionDetails: {
    paragraphs: [
      "SpaceX Clone is a full-stack web application that simulates the functionality of a space launch booking system, inspired by SpaceX. The project includes a responsive frontend built using Next.js, React.js, and CSS, ensuring smooth navigation and a visually engaging UI.",
      "On the backend, a REST API was developed using Node.js and Express.js, with MongoDB as the database to store missions, rockets, users, and booking information. This provided a scalable and flexible data layer.",
      "The project demonstrates my skills in integrating frontend and backend, handling CRUD operations, and designing a realistic booking workflow.",
      "I also focused on UI responsiveness, API error handling, and MongoDB schema design to ensure clean and maintainable code."
    ],
    bullets: [
      "Implemented frontend with Next.js and React for dynamic rendering of missions and rockets.",
      "Built a Node.js + Express.js REST API for launches, missions, bookings, and user data.",
      "Integrated MongoDB for persistent storage of mission details and booking records.",
      "Created a booking workflow allowing users to reserve seats for upcoming missions.",
      "Developed an admin dashboard for CRUD operations on missions, rockets, and bookings.",
      "Designed a responsive CSS layout inspired by SpaceX’s official website."
    ]
  }
},
{
  id: "emissions-intel-dashboard",
  companyName: "Stride Emissions Intelligence Dashboard",
  type: "Personal",
  category: ["AI/ML", "Data Visualization", "Full Stack"],
  shortDescription:
    "Built and deployed an interactive emissions intelligence dashboard with sector-wise visualizations and an AI-powered chat agent for data-driven and research-style insights.",
  githubLink:
    "https://github.com/jacobjerryarackal/emissions-intel-dashboard",
  websiteLink:
    "https://emissions-intel-dashboard-bz6lzyenbx8enau5nj3won.streamlit.app/",
  techStack: [
    "Python",
    "Streamlit",
    "Pandas",
    "Plotly",
    "LangChain",
    "Groq LLM",
    "REST API",
    "CSV / OWID Dataset"
  ],
  startDate: new Date("2025-12-01"),
  endDate: new Date("2025-12-08"),
  companyLogoImg: "/projects/emissions/logo.png",
  pagesInfoArr: [
    {
      title: "Dashboard Overview",
      description:
        "User-centric dashboard displaying emissions trends across countries, years, and industrial sectors using interactive visualizations.",
      imgArr: ["/projects/emissions/dashboard.png"],
    },
    {
      title: "Sector-wise Analysis",
      description:
        "Breakdown of emissions by industry sectors such as coal, oil, gas, cement, flaring, and land-use change.",
      imgArr: ["/projects/emissions/dashboard 2.png"],
    },
    {
      title: "AI Chat Agent",
      description:
        "AI-powered chat panel enabling users to ask analytical and research-based questions grounded in the emissions dataset.",
      imgArr: ["/projects/emissions/chat-agent.png"],
    },
  ],
  descriptionDetails: {
    paragraphs: [
      "The Emissions Intelligence Dashboard is an end-to-end data visualization and analysis platform developed.",
      "The application processes raw OWID sector-wise CO₂ emissions data, cleans and transforms it into a research-ready format using Pandas.",
      "Interactive visualizations built with Plotly allow users to explore emission trends over time and compare sector-wise contributions across countries.",
      "An AI-powered chat agent integrated using LangChain and Groq LLM enables users to query the dataset directly and receive structured, research-style insights."
    ],
    bullets: [
      "Processed and transformed large-scale OWID emissions datasets using Pandas",
      "Built interactive dashboards with filters for country, sector, and time period",
      "Visualized emissions trends and sector breakdowns using Plotly",
      "Integrated LangChain Pandas DataFrame Agent for data-grounded AI analysis",
      "Used Groq LLaMA 3.1 model for fast, scalable natural language insights",
      "Designed research-style prompting for analytical, multi-paragraph responses",
      "Deployed the application on Streamlit Cloud with secure API key management",
      "Focused on intuitive UX and real-world decision-support use cases"
    ],
  },
},
{
  "id": "user-data-management-system",
  "companyName": "User CRUD Management App",
  "type": "Professional",
  "category": ["Full Stack", "Dashboard", "Admin Dashboard"],
  "shortDescription": 
    "A scalable User Management System featuring a configuration-driven UI and a decoupled RESTful architecture, allowing for seamless data operations and rapid field extensibility.",
  "githubLink": "https://github.com/jacobjerryarackal/User-crud", 
  "websiteLink": "https://user-crud-frontend-tan.vercel.app/",
  "techStack": [
    "Next.js",
    "Typescript",
    "Ant Design",
    "Node.js",
    "Express",
    "Axios",
    "Render",
    "Vercel"
  ],
  "startDate": new Date("2026-02-15"),
  "endDate": new Date("2026-02-28"),
  "companyLogoImg": "/projects/user-crud/logo.png",
  "pagesInfoArr": [
    {
      "title": "User Directory & Management",
      "description":
        "A centralized dashboard featuring an Ant Design table component with integrated actions for viewing, editing, and deleting users with real-time feedback.",
      "imgArr": [
        "/projects/user-crud/user-list.png",
        "/projects/user-crud/user-details.png"
      ]
    },
    {
      "title": "Dynamic Form Interface",
      "description":
        "A configuration-driven form that handles user creation and updates. Features built-in validation for emails and phone numbers with instant error messaging.",
      "imgArr": [
        "/projects/user-crud/create-user.png",
        "/projects/user-crud/edit-user.png",
        "/projects/user-crud/validation-states.png"
      ]
    },
    {
      "title": "API Integration & States",
      "description":
        "Visual demonstration of loading skeletons, global error handling, and success notifications during asynchronous REST API calls.",
      "imgArr": [
        "/projects/user-crud/success-toast.png"
      ]
    }
  ],
  "descriptionDetails": {
    "paragraphs": [
      "The User CRUD Management App is a robust solution designed to streamline administrative data handling. It bridges a modern TypeScript-based frontend with a high-performance Node.js backend.",
      "By utilizing a configuration-driven approach for form rendering, the application allows developers to add new data fields (like 'Address' or 'Role') by simply updating a JSON schema, eliminating the need for complex UI refactoring.",
      "The project emphasizes clean state management and optimized API communication, ensuring that frontend interactions remain snappy and synchronized with the backend database at all times.",
      "The architecture is fully decoupled, with the Express API serving as a standalone service, making it ready for integration with mobile apps or third-party services in the future."
    ],
    "bullets": [
      "Architected a Decoupled Full-Stack System using Next.js for the client and Express for the RESTful API.",
      "Developed a Configuration-Driven Form Engine that dynamically generates UI components based on a field schema.",
      "Implemented Strict Form Validation using regex-based checks for localized phone numbers and email formats.",
      "Integrated Ant Design (antd) for a cohesive and professional-grade UI/UX with responsive layouts.",
      "Engineered reusable API utility layers with Axios for centralized error handling and request interceptors.",
      "Established clear Loading and Error States to improve user perception of performance during network latency.",
      "Deployed the ecosystem across Vercel and Render with optimized build pipelines for continuous delivery."
    ]
  }
}

];

export const featuredProjects = Projects.slice(0, 3);
