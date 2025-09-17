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
    id: "built-design",
    companyName: "Builtdesign",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
    websiteLink: "https://builtdesign.in",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "GraphQL",
      "Nest.js",
      "Typescript",
    ],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/builtdesign/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern and responsive landing page showcasing company services and portfolio",
        imgArr: [
          "/projects/builtdesign/landing_1.webp",
          "/projects/builtdesign/landing_3.webp",
          "/projects/builtdesign/landing_5.webp",
          "/projects/builtdesign/landing_6.webp",
          "/projects/builtdesign/landing_2.webp",
          "/projects/builtdesign/landing_4.webp",
        ],
      },
      {
        title: "Custom PDF Reader and optimizer",
        description:
          "Specialized PDF viewer with optimization features for improved performance and user experience",
        imgArr: ["/projects/builtdesign/pdf_opt.webp"],
      },
      {
        title: "Clients Dashboard",
        description:
          "Comprehensive client portal with project tracking, document management, and communication tools",
        imgArr: [
          "/projects/builtdesign/cli_dashboard_1.webp",
          "/projects/builtdesign/cli_dashboard_2.webp",
          "/projects/builtdesign/cli_dashboard_3.webp",
        ],
      },
      {
        title: "Admin Dashboard",
        description:
          "Powerful administrative interface for managing users, projects, and system settings",
        imgArr: ["/projects/builtdesign/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "During my time at Builtdesign, I had the opportunity to work on a dynamic and user-focused project that involved designing and optimizing a website catering to a user base of over 4000 individuals. My role as a full-stack web developer was to ensure a seamless experience for users by creating an efficient and maintainable platform.",
        "I collaborated closely with the product team to integrate cutting-edge features, employing technologies like Next.js and React with TypeScript for captivating front-end experiences. Additionally, I contributed significantly to the backend by utilizing Node.js, MongoDB, and GraphQL to design robust APIs and ensure smooth system functionality.",
        "This experience allowed me to enhance my skills in various areas of web development and deliver a high-quality product. I gained proficiency in front-end technologies such as Material UI and Tailwind CSS, as well as backend technologies including Nest.js and MySQL. The project's success in catering to a large user base and providing an intuitive user interface has further motivated me to pursue excellence in web development.",
      ],
      bullets: [
        "Developed and optimized a high-performing website catering to over 4000 users.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
        "Leveraged Next.js, React with TypeScript for captivating front-end experiences.",
        "Utilized Node.js, MongoDB, and GraphQL to design and manage databases.",
      ],
    },
  },
  {
  id: "movie-ticket-booking",
  companyName: "Movie Ticket Booking",
  type: "Professional",
  category: ["Web Dev", "Full Stack"],
  shortDescription: "Full-stack movie ticket booking app with OAuth, seat selection and payment integration.",
  websiteLink: "http://localhost:3000",
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
    { title: "Whatsapp Confirmation", imgArr: ["/projects/movie/Whatsapp Confirmation.jpeg"] },


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
  id: "car-booking",
  companyName: "CarApp",
  type: "Professional",
  category: ["Web Dev", "Full Stack"],
  shortDescription:
    "Built a full-featured vehicle booking & management app with Next.js frontend + GraphQL-powered backend, enabling dynamic searches, scheduling, and user & vehicle management.",
  websiteLink: "http://localhost:3000",
  githubLink: "https://github.com/jacobjerryarackal/CarApp",
  techStack: ["Next.js", "Typescript", "React", "GraphQL", "Node.js", "PostgreSQL", "Prisma", "Stripe"],
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
      `I ensured data consistency with Prisma migrations and leveraged PostgreSQL for relational data integrity (e.g. many‐to‐many between vehicles and features).`,
      `On the frontend, responsive UI handles image loading/fallbacks, filter/search states, and optimized rendering. Also handled error/fallback states for missing images etc., improving UX robustness.`
    ],
    bullets: [
      "Built a GraphQL API for all core data models: Vehicle, Feature, VehicleType, Manufacturer, Booking, Pricing.",
      "Implemented many-to-many relations (vehicles ↔ features, vehicles ↔ vehicle types) with Prisma.",
      "Used Next.js for SSR/SSG where appropriate, with dynamic pages for vehicle detail views.",
      "Set up image fallback mechanisms, client-side state for filters & search, and ensured responsive UI UX.",
      "Designed admin panel with CRUD capabilities for content management via GraphQL mutations."
    ]
  }
},
  {
    id: "apex-shopping",
    companyName: "Apex Shopping App",
    type: "Personal",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed a feature-rich mobile shopping application with admin panel, user authentication, and seamless product management using React Native and Firebase.",
    githubLink: "https://github.com/namanbarkiya/apex-shopping-app",
    techStack: ["React Native", "Javascript", "Redux", "Node.js", "express.js"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/apex/logo.png",
    pagesInfoArr: [
      {
        title: "Splash Screen",
        description: "Custom animated splash screen with app branding",
        imgArr: ["/projects/apex/app_7.webp"],
      },
      {
        title: "Login/Signup Authentication",
        description: "Secure user authentication system with Firebase",
        imgArr: ["/projects/apex/app_1.webp"],
      },
      {
        title: "All Products Explore Screen",
        description: "Interactive product browsing with categories and filters",
        imgArr: ["/projects/apex/app_3.webp"],
      },
      {
        title: "Admin Panel",
        description:
          "Comprehensive admin dashboard for product and order management",
        imgArr: ["/projects/apex/app_4.webp", "/projects/apex/app_6.webp"],
      },
      {
        title: "Sidenav Navigation",
        description: "Intuitive side navigation for easy app navigation",
        imgArr: ["/projects/apex/app_5.webp"],
      },
      {
        title: "Firebase Database",
        description:
          "Real-time database structure for efficient data management",
        imgArr: ["/projects/apex/db.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Apex Shopping App represents a comprehensive mobile e-commerce solution that I developed from the ground up using React Native and Firebase. This project showcases my ability to create a full-featured shopping application with both user and admin functionalities.",
        "The application features a robust authentication system, allowing users to securely sign up and log in. The product exploration interface is designed with user experience in mind, incorporating smooth navigation and intuitive filtering options.",
        "One of the key highlights is the admin panel, which provides complete control over product management, order processing, and inventory tracking. The integration with Firebase ensures real-time data synchronization and reliable data persistence.",
        "The app's architecture emphasizes scalability and performance, utilizing Redux for state management and following best practices for mobile app development. The UI/UX design focuses on providing a seamless shopping experience across different device sizes.",
      ],
      bullets: [
        "Implemented secure user authentication and authorization using Firebase",
        "Designed and developed an intuitive product browsing and shopping cart system",
        "Created a comprehensive admin panel for product and order management",
        "Integrated real-time data synchronization using Firebase Database",
        "Implemented state management using Redux for optimal performance",
        "Designed responsive UI components following mobile-first principles",
        "Incorporated smooth animations and transitions for enhanced user experience",
      ],
    },
  },
  {
    id: "builtdesign-blogs",
    companyName: "Builtdesign Blogs",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Crafted Builtdesign's vibrant Blogs Website using Netlify CMS and React for engaging content experiences.",
    websiteLink: "https://blog.builtdesign.in",
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "Typescript"],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/builtdesign-blogs/logo.png",
    pagesInfoArr: [
      {
        title: "Blog Landing Page",
        description:
          "Modern and responsive landing page showcasing featured articles",
        imgArr: ["/projects/builtdesign-blogs/blog_2.webp"],
      },
      {
        title: "Blog Listing",
        description:
          "Organized display of all blog posts with search and filtering",
        imgArr: ["/projects/builtdesign-blogs/blog_3.webp"],
      },
      {
        title: "Category Navigation",
        description: "Intuitive category-based navigation system",
        imgArr: ["/projects/builtdesign-blogs/blog_1.webp"],
      },
      {
        title: "Article View",
        description:
          "Clean and readable article layout with rich media support",
        imgArr: [
          "/projects/builtdesign-blogs/blog_4.webp",
          "/projects/builtdesign-blogs/blog_5.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As part of the Builtdesign platform, I developed a sophisticated blog website that serves as a content hub for the company's thought leadership and industry insights. The project leveraged Next.js and React to create a fast, SEO-friendly platform.",
        "The blog platform features a modern, responsive design that prioritizes readability and user engagement. I implemented a robust content management system using Netlify CMS, enabling the content team to easily publish and manage blog posts.",
        "The architecture includes server-side rendering for optimal performance and SEO, while MongoDB provides flexible content storage. TypeScript ensures code reliability and maintainability throughout the application.",
        "Key features include category-based navigation, search functionality, and a rich text editor for content creation. The platform supports various content types including images, code snippets, and embedded media.",
      ],
      bullets: [
        "Developed a modern blog platform using Next.js and React with TypeScript",
        "Implemented Netlify CMS for efficient content management",
        "Created a responsive design that prioritizes readability and user engagement",
        "Built server-side rendering for optimal performance and SEO",
        "Integrated MongoDB for flexible content storage and management",
        "Developed category-based navigation and search functionality",
        "Implemented rich text editing capabilities for content creation",
      ],
    },
  },
  {
    id: "portfolio-card",
    companyName: "Portfolio Card",
    type: "Personal",
    category: ["Web Dev", "Frontend", "3D Modeling"],
    shortDescription:
      "Forged an immersive 3D Portfolio Card utilizing the prowess of Three.js and Blender, where art and technology converge in an interactive masterpiece.",
    websiteLink: "https://card.namanbarkiya.xyz/",
    githubLink: "https://github.com/namanbarkiya/3d-portfolio-card",
    techStack: ["React", "Javascript", "HTML 5", "CSS 3"],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/card/logo.png",
    pagesInfoArr: [
      {
        title: "Card Views",
        description: "Front and back views of the interactive 3D card",
        imgArr: ["/projects/card/card_2.webp", "/projects/card/card_3.webp"],
      },
      {
        title: "Interactive Elements",
        description:
          "Custom links embedded in the 3D model with interactive animations",
        imgArr: ["/projects/card/card_1.webp"],
      },
      {
        title: "3D Model Development",
        description: "Blender project showcasing the model creation process",
        imgArr: ["/projects/card/card_4.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "In my personal, I've ventured into the world of creativity, fashioning a distinctive portfolio card through the utilization of Three.js.",
        "This portfolio card transcends convention; it emerges as a captivating 3D model, adorned with meticulous lighting arrangements that conjure a spellbinding visual journey.",
        "To materialize this concept, I've harnessed the combined potential of Three.js and Blender, orchestrating a meticulous crafting of the central 3D model that serves as the cornerstone of the card's allure.",
        "Yet, the allure extends beyond aesthetics. I've ingeniously interwoven custom links directly into the fabric of Three.js components. Through the creation and seamless integration of novel components, these additions elegantly rest upon the card's surface, mirroring its rotations and delivering an interactive dimension to my portfolio.",
        "The portfolio card itself is an opus of motion, perpetually swaying in an auto-rotational dance that unfurls its multifaceted essence. As an enhancement, I've introduced an instinctive user interaction element. A simple, intuitive drag of the card in specific directions grants viewers a comprehensive vantage, enabling exploration from every conceivable angle.",
        "At its core, my personal epitomizes technical finesse, artistic expression, and interactive design. The amalgamation of Three.js, Blender's prowess, and the innovation of component integration has birthed not only a portfolio card, but a dynamic encounter leaving an indelible imprint on all who partake.",
      ],
      bullets: [
        "Conceptualized and realized a distinct portfolio card using Three.js, highlighting creative exploration.",
        "Crafted a mesmerizing 3D model enhanced by thoughtful lighting arrangements, resulting in a captivating visual voyage.",
        "Leveraged the synergy of Three.js and Blender to meticulously sculpt and refine the central 3D model, embodying meticulous attention to detail.",
        "Innovatively integrated custom links within Three.js components, introducing an interactive layer via seamlessly incorporated new elements.",
        "Enabled an auto-rotating feature for the portfolio card, perpetually showcasing its various facets to observers.",
        "Introduced an instinctual user interaction mechanism, allowing viewers to comprehensively explore the card's dimensions through simple, intuitive dragging motions.",
        "Represented a fusion of technical prowess, artistic ingenuity, and interactive design in a project that reshapes the boundaries of conventional portfolio representation.",
      ],
    },
  },
  {
    id: "cirql-dashboard",
    companyName: "Cirql Dashboard",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Created a dashboard project using React and Tailwind CSS, focusing on UI design and routing implementation.",
    websiteLink: "https://cirql-ui.namanbarkiya.xyz/",
    techStack: ["React", "Tailwind CSS", "Google Auth"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-02-15"),
    companyLogoImg: "/projects/cirql/logo.png",
    pagesInfoArr: [
      {
        title: "Dashboard Home",
        description:
          "Main dashboard view with analytics widgets and data visualization",
        imgArr: ["/projects/cirql/web_1.png", "/projects/cirql/web_2.png"],
      },
      {
        title: "Profile Page",
        description:
          "User profile management interface with customization options",
        imgArr: ["/projects/cirql/web_3.png", "/projects/cirql/web_4.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "For the 'Cirql Dashboard' personal, I aimed to enhance my UI design skills and deepen my understanding of routing within a React application.",
        "I utilized React and Tailwind CSS to craft an intuitive dashboard interface that provides users with an organized overview of data and functionalities. The UI components were thoughtfully designed to ensure a seamless user experience.",
        "Incorporating Google Sign-In Authentication further fortified the project by adding a layer of security and convenience. Users are required to authenticate before accessing certain routes, ensuring the safety of sensitive information.",
        "The routing system was meticulously implemented to enable smooth navigation between different sections of the dashboard, simulating real-world use cases.",
        "Through this project, I've gained valuable insights into UI/UX design principles and the implementation of secure and efficient routing in React applications.",
      ],
      bullets: [
        "Created a user-friendly dashboard project using React and Tailwind CSS.",
        "Implemented Google Sign-In Authentication to ensure secure access to sensitive routes.",
        "Designed UI components to provide an intuitive and visually pleasing experience.",
        "Focused on implementing a smooth routing system to simulate real-world use cases.",
        "Enhanced my skills in UI design, routing, and component architecture.",
      ],
    },
  },
  {
    id: "inscript-hindi-typing",
    companyName: "Inscript Hindi Typing",
    type: "Personal",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Developed a user-friendly website for Inscript Hindi typing, addressing the need for a simple tool for Hindi writers to convey data digitally.",
    websiteLink: "https://hindityping.namanbarkiya.xyz",
    githubLink: "https://github.com/namanbarkiya/inscript-hindi-keyboard",
    techStack: ["HTML 5", "CSS 3", "Javascript"],
    startDate: new Date("2022-05-01"),
    endDate: new Date("2022-06-15"),
    companyLogoImg: "/projects/hindi-keyboard/logo.png",
    pagesInfoArr: [
      {
        title: "Typing Interface",
        description: "Minimal and user-friendly Inscript Hindi typing area",
        imgArr: ["/projects/hindi-keyboard/web_1.png"],
      },
      {
        title: "Copy and Download the file",
        description:
          "Export functionality allowing users to copy text or download as a document file",
        imgArr: [
          "/projects/hindi-keyboard/web_2.png",
          "/projects/hindi-keyboard/web_3.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The 'Inscript Hindi Typing Website' project emerged from the need to provide a simple and accessible tool for Hindi writers, especially those in digital news and media, who wished to convey data in Hindi.",
        "Recognizing the challenges posed by complex software in the market, I set out to create a minimalistic typing area that catered to the needs of a vast community of Hindi typists in India.",
        "The project was designed to address the specific requirements of users familiar with the Inscript keyboard layout, mapping English and Hindi alphabets for seamless typing. The intuitive interface allowed users to effortlessly switch between languages, streamlining the process of content creation.",
        "Leveraging HTML and CSS, I crafted the website's UI to ensure a user-friendly experience. Additionally, Local Storage was utilized to enable users to save and retrieve their work, enhancing convenience and productivity.",
        "The website's focus on user experience and simplicity proved to be a key factor in its popularity among Hindi writers. By offering a tool that reduced the barriers to entry, I contributed to the digital empowerment of Hindi typists who previously faced challenges in conveying their message effectively.",
        "This project marked one of my initial forays into web development and highlighted the transformative potential of technology in addressing real-world challenges.",
      ],
      bullets: [
        "Developed a user-friendly website for Inscript Hindi typing.",
        "Catered to the needs of Hindi writers in digital news and media.",
        "Created a minimalistic and intuitive typing interface for the Inscript keyboard layout.",
        "Mapped English and Hindi alphabets to provide a seamless typing experience.",
        "Utilized HTML and CSS to design a user-friendly UI.",
        "Implemented Local Storage to enable users to save and retrieve their work.",
        "Contributed to the digital empowerment of Hindi typists by offering a simple tool.",
        "Marked one of my first web development projects, showcasing technology's potential for addressing real-world needs.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
