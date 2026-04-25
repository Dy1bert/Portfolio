import Image from "next/image";
import { Project } from "@/app/ProjectList";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Link href={'/projects/' + project.slug}>
            <div className={"w-full h-full rounded-xl bg-background-b p-6 text-white shadow-lg hover:scale-110 transition-transform duration-300"}>
                <div className="relative w-full aspect-[16/9]">
                    <Image
                        src={project.ImgSrc}
                        alt={project.Name}
                        fill
                        className="rounded-md object-cover"
                    />
                </div>
                <div className="mt-4 text-center">
                    <h1 className="text-xl font-semibold text-background-a md:text-2xl">
                        {project.Name}
                    </h1>

                    <p className="mt-2 text-background-a text-sm md:text-md">
                        {project.ShortDescription}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
