import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative p-6 bg-background border border-border rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="relative w-full h-[180px] overflow-hidden rounded-lg">
        <Image
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          src={project.companyLogoImg}
          alt={project.companyName}
          fill
        />
      </div>

      <div className="pt-5 space-y-3">
        <h5 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          {project.companyName}
        </h5>

        <p className="line-clamp-3 text-muted-foreground">
          {project.shortDescription}
        </p>

        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>

        <Link href={`/projects/${project.id}`}>
          <Button variant="default" className="mt-2 group">
            Read more
            <Icons.chevronRight className="w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

      <div className="absolute bottom-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-muted border border-border">
        {project.type === "Personal" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.work className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}