import React from 'react';
import { ProjectList } from "@/app/ProjectList";
import ProjectCard from "@/components/ProjectCard";

const ProjectShowcase = () => {
    return (
        <section className="w-full min-h-[75vh] flex flex-col items-center bg-background-a text-center">
            <h1 className="mt-[5%] text-6xl font-bold text-background-b">
                Project Showcase
            </h1>

            <h1 className="mt-4 text-md text-background-b max-w-5xl">
                Select the project card to see more information!
            </h1>
            <div className="mt-40 mb-8 w-[80%] h-full grid grid-cols-1 md:grid-cols-3 gap-[5vw] md:mt-20">
                {ProjectList.slice(0, 3).map((project) => (
                    <ProjectCard
                        key={project.ID}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectShowcase;