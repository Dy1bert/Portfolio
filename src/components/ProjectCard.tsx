import Image from "next/image";
import { Project } from "@/app/ProjectList";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
    isFocused: boolean;
}

const ProjectCard = ({ project, isFocused }: ProjectCardProps) => {
    return (
        <Link href={'/projects/' + project.slug}>
            <div className={"flex flex-col w-full h-full rounded-xl bg-background-b p-6 text-white shadow-lg hover:scale-110 transition-transform duration-300"}>
                <div className="relative w-full aspect-video">
                    <Image
                        src={project.ImgSrc}
                        alt={project.Name}
                        fill
                        className="rounded-md object-cover"
                    />
                </div>
                <div className="flex flex-col items-center justify-center h-full mt-4">
                    <h1 className={"text-background-a " + (isFocused ? "md:text-5xl text-xl font-extrabold" : "md:text-3xl text-lg font-medium")}>
                        {project.Name}
                    </h1>

                    <p className="mt-2 text-background-a text-sm md:text-lg">
                        {project.ShortDescription}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
