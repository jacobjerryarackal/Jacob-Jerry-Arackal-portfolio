import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="group relative rounded-xl border bg-background p-6 transition-all hover:shadow-lg hover:-translate-y-1"
        >
          <div className="flex flex-col gap-4">
            
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted">
              <skill.icon className="h-10 w-10" />
            </div>

            {/* Text */}
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">{skill.name}</h3>

              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            </div>

            {/* Rating */}
            <Rating stars={skill.rating} />
          </div>
        </div>
      ))}
    </div>
  );
}