import Image from "next/image";
import { Project } from "@/Data/ProjectList";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
    isFocused: boolean;
}

const ProjectCard = ({ project, isFocused }: ProjectCardProps) => {
    return (
        <Link href={'/projects/' + project.slug}>
            <div className={"flex flex-col w-full h-full rounded-xl bg-background-b p-6 text-white shadow-lg transition-transform duration-300 " + (isFocused ? "hover:scale-105" : "")}>
                <div className="relative w-full aspect-video">
                    <Image
                        src={project.ImgSrc}
                        alt={project.Name}
                        fill
                        className="rounded-md object-cover"
                    />
                </div>
                <div className="flex flex-col items-center justify-center min-h-[100px] mt-4">
                    <h1 className={"text-background-a line-clamp-2" + (isFocused ? "xl:text-5xl md:text-4xl text-3xl font-extrabold" : "xl:text-3xl md:text-xl text-lg font-medium")}>
                        {project.Name}
                    </h1>
                    <p className="mt-2 text-background-a text-sm xl:text-lg">
                        {project.ShortDescription}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
