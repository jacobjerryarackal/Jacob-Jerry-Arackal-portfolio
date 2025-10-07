import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "techfriar",
    position: "Junior Software Developer",
    company: "Techfriar Technologies",
    location: "Kochi",
    startDate: new Date("2024-05-01"),
    endDate: new Date("2025-03-28"),
    description: [
      "Developed responsive web applications using Next.js, CSS, Express, and MongoDB.",
      "Integrated JWT-based authentication for secure, multi-user access.",
      "Collaborated on RESTful API development with Node.js and Express.js, ensuring seamless data flow.",
      "Led Agile ceremonies and conducted code reviews to improve team collaboration and code quality."
    ],
    achievements: [
      "Successfully developed responsive web applications, leading to a 15% boost in user engagement.",
      "Reduced MongoDB query response time by 20% through query restructuring and indexing."
    ],
    skills: ["Next.js", "CSS 3", "Express", "MongoDB", "Node.js", "Javascript", "AWS", "Typescript"],
    companyUrl: "https://techfriar.com",
    logo: "/experience/techfriar-logo.png",
  },
  {
    id: "microsoft",
    position: "Future Ready Talent Intern",
    company: "Microsoft",
    location: "Remote",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-06-01"),
    description: [
    "Utilized Microsoft Azure services to develop a variety of business solutions.",
    "Engineered and implemented machine learning models for data-driven insights.",
    "Gained hands-on experience with Python libraries like NumPy and Pandas for data manipulation and analysis."
  ],
  achievements: [
    "Leveraged Azure Technologies to create actionable solutions for specific business challenges, resulting in improved operational efficiency.",
    "Built a machine learning model using Python, NumPy, and Pandas to predict automobile prices.",
    "Successfully delivered an actionable solution that improved operational efficiency."
  ],
    skills: ["Python", "Azure", "FastAPI"],
    companyUrl: "https://www.microsoft.com",
    logo: "/experience/microsoft-logo.png",
}
];
