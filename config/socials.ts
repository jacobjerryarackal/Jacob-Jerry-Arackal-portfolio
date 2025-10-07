import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@jacobjerryarackal",
    icon: Icons.gitHub,
    link: "https://github.com/jacobjerryarackal",
  },
  {
    name: "LinkedIn",
    username: "Jacob Jerry Arackal",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/jacob-jerry-arackal-5a4596190/",
  },
  {
    name: "Gmail",
    username: "jacobjerryarackal123",
    icon: Icons.gmail,
    link: "mailto:jacobjerryarackal123@gmail.com",
  },
];
