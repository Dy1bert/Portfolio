import {ProjectList} from "@/app/ProjectList";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

export default function Home() {
    return (
            <main className="flex flex-col min-h-full min-w-screen items-center px-16 py-16 bg-background-a">
                <h1 className="text-6xl font-bold mt-16 text-white dark:text-white ">
                    Projects
                </h1>
                <div className="mt-16 w-[75%] grid grid-cols-1 md:grid-cols-2 gap-[6vw]">
                    {ProjectList.map((project) => (
                        <ProjectCard
                            key={project.ID}
                            project={project}
                        />
                    ))}
                </div>
            </main>
    );
}
