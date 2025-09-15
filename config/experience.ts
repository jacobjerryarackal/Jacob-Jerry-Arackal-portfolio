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
    id: "ubs",
    position: "Software Development Engineer",
    company: "UBS",
    location: "Mumbai, India",
    startDate: new Date("2024-08-01"),
    endDate: "Present",
    description: [
      "Contributing to the P&L dashboard used by traders and senior stakeholders.",
      "Leading the migration of the UI from Kendo to UBS's internal design system.",
      "Building a daily FX rate fetcher by integrating Databricks jobs with backend services.",
    ],
    achievements: [
      "Delivered production code within 1 month of joining by contributing to the P&L dashboard used by traders and senior stakeholders.",
      "Led the migration of the UI from Kendo to UBS's internal design system, improving frontend consistency and performance.",
      "Built a daily FX rate fetcher by integrating Databricks jobs (Python, Spark SQL) with backend services (Java), automating exchange rate updates.",
      "Won UBS's internal AI Venture Challenge by developing data transformation pipelines and anomaly detection models on trading datasets.",
      "Collaborated closely with product owners and designers for user-centric features, improving usability and trader workflows.",
    ],
    skills: ["Typescript", "React", "Databricks", "Java", "Python"],
    companyUrl: "https://www.ubs.com",
    logo: "/logo.png",
  },
  {
    id: "techfriar",
    position: "Junior Software Developer",
    company: "Techfriar Technologies",
    location: "Kochi",
    startDate: new Date("2024-05-01"),
    endDate: new Date("2025-04-01"),
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
    skills: ["Python",],
    companyUrl: "https://www.microsoft.com",
    logo: "/experience/microsoft-logo.png",
}
];
